#!/usr/bin/env node
// Decide which Raku code blocks of the course get a Run button.
//
// The Run button is the raku.online embed (https://raku.online/raku.js): it
// turns a code block into an editor that runs the program right in the browser,
// with Raku++ compiled to WebAssembly. That is not Rakudo, so a block only gets
// the button where pressing it gives what the course expects. For every ```raku
// block of every language, this script:
//
//   * runs the block under Rakudo, twice — a block whose output changes from
//     run to run (hash order, rand, the time) is left out;
//   * runs it in the very WebAssembly engine the embed loads, here under Node;
//   * keeps it only if both runs succeed with the same stdout and stderr;
//   * compares the result with the output the page itself shows after the
//     block (a ``` / ```console block or an indented one), if it shows any. A
//     program that reads standard input is excused: the page shows a terminal
//     session with the user's typing in it, and the embed gives such a program
//     an input box;
//   * leaves out a block that prints nothing — declarations and fragments,
//     where a Run button with no result would only look broken.
//
// Quiz pages are not checked at all: there, running the program would give
// the answer away, so raku-pages.raku never gives their blocks the button.
//
// The blocks that pass are written to _data/runnable.txt, which raku-pages.raku
// reads to mark them. Blocks are matched by their exact text, so a block edited
// after the last check has no Run button until the next one. Run this again
// after changing code in the course, or when raku.online updates its engine:
//
//     node bin/check-runnable.js
//
// Options:
//     --rakudo=PATH    the Rakudo to compare with (default: `rakudo`)
//     --engine=DIR     use rakujs.js + rakujs.wasm from DIR instead of
//                      downloading the ones https://raku.online/raku.js loads
//     --jobs=N         parallel Rakudo runs (default: the number of CPUs)
//     --report=FILE    also write every block that was left out, and why
//
// Each program gets the same standard input in both compilers, and runs as a
// file named `web` in an empty directory of its own, so that a message that
// mentions the program reads "at web line 2" in both.

'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const TIMEOUT = 20000;              // per program, per compiler
const STDIN = '10\n20\n30\n';

// ---- the WebAssembly engine, in a worker thread ---------------------------
// One instance runs every program in turn, as one instance serves a whole page
// in the browser. A run that never returns is ended by killing the worker.
if (!isMainThread) {
    const RakuJS = require(path.join(workerData.engine, 'rakujs.js'));
    const wasm = fs.readFileSync(path.join(workerData.engine, 'rakujs.wasm'));
    // `both` keeps the two streams in the order they were written, as the
    // embed shows them.
    let out = '', err = '', both = '';
    RakuJS({
        instantiateWasm: (imports, done) => {
            WebAssembly.instantiate(wasm, imports).then(r => done(r.instance));
            return {};
        },
        print: t => { out += t + '\n'; both += t + '\n'; },
        printErr: t => { err += t + '\n'; both += t + '\n'; },
    }).then(m => {
        parentPort.on('message', job => {
            out = ''; err = ''; both = '';
            let rc = null, crash = null;
            try { rc = m.ccall('rakupp_run', 'number', ['string', 'string'], [job.code, STDIN]); }
            catch (e) { crash = String(e); }
            parentPort.postMessage({ id: job.id, rc, out, err, both, crash });
        });
        parentPort.postMessage({ ready: m.ccall('rakupp_version', 'string', [], []) });
    });
    return;
}

const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, '_data', 'runnable.txt');
const LANGS = ['bg', 'de', 'eo', 'es', 'it', 'la', 'lv', 'nl', 'ru', 'uk'];

const opt = {};
for (const a of process.argv.slice(2)) {
    const m = a.match(/^--([\w-]+)=(.*)$/);
    if (!m) { console.error(`unknown option: ${a}`); process.exit(2); }
    opt[m[1]] = m[2];
}
const RAKUDO = opt.rakudo || 'rakudo';
const JOBS = +opt.jobs || os.cpus().length;

// ---- reading the course ---------------------------------------------------

// Every page source: index.md files, except in the top-level directories that
// hold no pages — _out, _data, docs (the published copy), exercises (the
// solutions as .raku files), and the like.
function* markdownFiles(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        if (e.isDirectory()) {
            if (/^[._]/.test(e.name)) continue;
            if (dir === ROOT && ['docs', 'exercises', 'node_modules'].includes(e.name)) continue;
            yield* markdownFiles(path.join(dir, e.name));
        }
        else if (e.name === 'index.md') yield path.join(dir, e.name);
    }
}

// The code blocks of a page, found exactly as raku-pages.raku finds them
// (extract-code), so the text here is the text the generator looks up.
const FENCE = /```(\S+)?\n+([\s\S]*?)\n+```/g;
// An indented (4-space) block: pandoc's other way to show program output.
const INDENTED = /(?:^|\n\n)( {4}(?! *```)\S.*(?:\n(?: {4}.*)?)*)/;

function pageBlocks(file) {
    const page = path.relative(ROOT, path.dirname(file)).split(path.sep).join('/');
    const lang = LANGS.includes(page.split('/')[0]) ? page.split('/')[0] : 'en';
    // The generator's front-matter strip, unanchored as it is there.
    const md = fs.readFileSync(file, 'utf8').replace(/---\n[\s\S]*?---\n/, '');
    const all = [...md.matchAll(FENCE)].map(m => ({
        fence: (m[1] || '').toLowerCase(), code: m[2], start: m.index, end: m.index + m[0].length,
    }));
    const raku = [];
    all.forEach((b, i) => {
        if (b.fence !== 'raku' && b.fence !== 'perl6') return;
        const next = all[i + 1];
        const gap = md.slice(b.end, next ? next.start : md.length);
        raku.push({ page, lang, index: raku.length, code: b.code, shown: shownOutput(gap, next) });
    });
    return raku;
}

// What the page shows as this block's output: the first output block in the
// gap before the next code block, after no more than a short sentence or a
// heading ("## Output", "The program prints:"). `$ raku …` command lines are
// not output, and a block of nothing but those shows no output at all.
function shownOutput(gap, next) {
    let shown = null;
    const m = gap.match(INDENTED);
    if (m && m.index < 500)
        shown = m[1].split('\n').map(l => l.slice(4)).join('\n');
    else if (next && (next.fence === '' || next.fence === 'console') && gap.length < 500)
        shown = next.code.split('\n').filter(l => !l.startsWith('$ ')).join('\n');
    return shown !== null && shown.trim() ? shown : null;
}

// ---- running the programs -------------------------------------------------

// The programs running right now, so that an interrupted check does not leave
// a sleeping server or two behind.
const running = new Set();
for (const sig of ['SIGINT', 'SIGTERM'])
    process.on(sig, () => { for (const p of running) p.kill('SIGKILL'); process.exit(130); });

function runRakudo(code) {
    return new Promise(resolve => {
        const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'rk-run-'));
        fs.writeFileSync(path.join(dir, 'web'), code);
        const p = spawn(RAKUDO, ['web'], { cwd: dir });
        running.add(p);
        const out = [], err = [];
        let timedOut = false;
        const t = setTimeout(() => { timedOut = true; p.kill('SIGKILL'); }, TIMEOUT);
        p.stdout.on('data', d => out.push(d));
        p.stderr.on('data', d => err.push(d));
        p.stdin.on('error', () => {});      // a program that exits without reading
        p.stdin.end(STDIN);
        p.on('error', e => { console.error(`cannot run ${RAKUDO}: ${e.message}`); process.exit(1); });
        p.on('close', rc => {
            clearTimeout(t);
            running.delete(p);
            fs.rmSync(dir, { recursive: true, force: true });
            resolve({
                rc, timeout: timedOut,
                // Compile errors name the program by its full path.
                out: Buffer.concat(out).toString().split(dir + path.sep).join(''),
                err: Buffer.concat(err).toString().split(dir + path.sep).join(''),
            });
        });
    });
}

async function pool(items, jobs, fn, label) {
    const results = new Map();
    let next = 0, done = 0;
    async function lane() {
        while (next < items.length) {
            const item = items[next++];
            results.set(item.id, await fn(item));
            if (++done % 200 === 0) process.stderr.write(`  ${label}: ${done}/${items.length}\n`);
        }
    }
    await Promise.all(Array.from({ length: jobs }, lane));
    return results;
}

// Several lanes, each a worker with an engine of its own, take the programs in
// turn: a program that never ends holds up only its own lane.
async function runWasm(engine, programs, lanes) {
    const results = new Map();
    let version = null, i = 0;
    function lane() {
        return new Promise(resolve => {
            let w, job = null, timer;
            function start() {
                w = new Worker(__filename, { workerData: { engine } });
                w.on('message', msg => {
                    if (msg.ready) { version = msg.ready; return next(); }
                    clearTimeout(timer);
                    results.set(msg.id, msg);
                    if (msg.crash) return restart();     // the instance is in an unknown state
                    next();
                });
                w.on('error', e => {
                    clearTimeout(timer);
                    if (!job) { console.error(`cannot start the engine: ${e.message}`); process.exit(1); }
                    results.set(job.id, { crash: String(e) });
                    restart();
                });
            }
            function restart() { w.removeAllListeners(); w.terminate(); start(); }
            function next() {
                if (i >= programs.length) { w.terminate(); return resolve(); }
                job = programs[i++];
                if (i % 200 === 0) process.stderr.write(`  Raku++: ${i}/${programs.length}\n`);
                timer = setTimeout(() => { results.set(job.id, { timeout: true }); restart(); }, TIMEOUT);
                w.postMessage(job);
            }
            start();
        });
    }
    await Promise.all(Array.from({ length: lanes }, lane));
    return { version, results };
}

// The engine the live embed loads: raku.js names its build with a cache tag.
async function fetchEngine() {
    const js = await (await fetch('https://raku.online/raku.js')).text();
    const tag = (js.match(/var VER = '\?v=([\w.-]+)'/) || [])[1] || 'latest';
    const dir = path.join(os.tmpdir(), `raku-online-engine-${tag}`);
    for (const f of ['rakujs.js', 'rakujs.wasm']) {
        const file = path.join(dir, f);
        if (fs.existsSync(file)) continue;
        const r = await fetch(`https://raku.online/${f}?v=${tag}`);
        if (!r.ok) throw new Error(`${f}: HTTP ${r.status}`);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(file, Buffer.from(await r.arrayBuffer()));
    }
    return { dir, tag };
}

// ---- comparing ------------------------------------------------------------

const ANSI = /\x1b\[[0-9;?]*[A-Za-z]/g;
// The same test the embed uses to give a block its input box.
const READS_STDIN = /\$\*IN\b|(?:^|[^.\w])(?:get|prompt|lines)\b/;
const ELISION = /^\s*(?:\. \. \.|\.\.\.|…)\s*$/;

function norm(s) {
    const lines = (s || '').replace(ANSI, '')
        .replace(/\bat \S+ line (\d+)/g, 'at FILE line $1')      // the page may say "at t.raku line 2"
        .split('\n').map(l => l.trimEnd());
    while (lines.length && !lines[lines.length - 1]) lines.pop();
    while (lines.length && !lines[0]) lines.shift();
    return lines.join('\n');
}

// Does the program's output match what the page shows? The page may show
// stderr (warnings, dd) together with stdout — interleaved as written, or one
// stream after the other, as a terminal may show them — and may leave lines
// out with ". . .". (Every line the engine prints ends in a newline.)
function matchesShown(w, shown) {
    const want = norm(shown);
    const candidates = [w.out, w.both, w.err + w.out, w.out + w.err].map(norm);
    const lines = want.split('\n');
    if (!lines.some(l => ELISION.test(l))) return candidates.includes(want);
    const chunks = [];
    let cur = [];
    for (const l of lines) {
        if (ELISION.test(l)) { if (cur.length) chunks.push(cur.join('\n')); cur = []; }
        else cur.push(l);
    }
    if (cur.length) chunks.push(cur.join('\n'));
    return candidates.some(c => {
        let pos = 0;
        for (const chunk of chunks.map(x => x.replace(/^\n+|\n+$/g, '')).filter(Boolean)) {
            const at = c.indexOf(chunk, pos);
            if (at < 0) return false;
            pos = at + chunk.length;
        }
        return true;
    });
}

// Why this block gets no Run button, or null when it gets one.
function verdict(prog, a, b, w) {
    if (w.timeout) return 'Raku++ timed out';
    if (w.crash) return 'Raku++ crashed: ' + w.crash;
    if (a.timeout) return 'Rakudo timed out';
    if (a.rc !== 0) return 'fails under Rakudo';
    if (b.timeout || b.rc !== 0 || norm(a.out) !== norm(b.out) || norm(a.err) !== norm(b.err))
        return 'output changes from run to run under Rakudo';
    if (w.rc !== 0) return 'fails under Raku++';
    if (norm(a.out) !== norm(w.out)) return 'stdout differs between Rakudo and Raku++';
    if (norm(a.err) !== norm(w.err)) return 'stderr differs between Rakudo and Raku++';
    if (!norm(w.out) && !norm(w.err)) return 'prints nothing';
    if (!READS_STDIN.test(prog.code)) {
        const bad = prog.uses.find(u => u.shown !== null && !matchesShown(w, u.shown));
        if (bad) return `differs from the output shown on ${bad.page}`;
    }
    return null;
}

// ---- the data file --------------------------------------------------------

function writeData(runnable, about) {
    const head = [
        '# Raku code blocks that get a Run button (the raku.online embed).',
        '#',
        '# Generated by `node bin/check-runnable.js` — do not edit by hand; that',
        '# script says how a block qualifies. raku-pages.raku gives the button to',
        '# every ```raku block whose text is exactly one of the blocks below.',
        '#',
        `# Checked: ${about}`,
        '#',
        '# Each block starts with a `--- <page>` line naming the (first) page it is',
        '# on, followed by its code, every non-empty line indented by four spaces.',
    ];
    const body = runnable.map(p =>
        `\n--- ${p.uses[0].page}\n` + p.code.split('\n').map(l => l === '' ? '' : '    ' + l).join('\n'));
    fs.mkdirSync(path.dirname(DATA), { recursive: true });
    fs.writeFileSync(DATA, head.join('\n') + '\n' + body.join('\n') + '\n');
}

// ---- main -----------------------------------------------------------------

(async () => {
    // Unique programs, each with every place it is used (English first).
    const programs = new Map();
    for (const file of markdownFiles(ROOT)) {
        if (/^quiz\d*$/.test(path.basename(path.dirname(file)))) continue;
        for (const b of pageBlocks(file)) {
            if (!programs.has(b.code)) programs.set(b.code, { code: b.code, uses: [] });
            programs.get(b.code).uses.push(b);
        }
    }
    const list = [...programs.values()];
    const key = u => (u.lang === 'en' ? '0' : '1') + u.page + '\0' + String(u.index).padStart(4, '0');
    for (const p of list) p.uses.sort((x, y) => key(x) < key(y) ? -1 : 1);
    list.sort((x, y) => key(x.uses[0]) < key(y.uses[0]) ? -1 : 1);
    list.forEach((p, i) => { p.id = i; });
    const uses = list.reduce((n, p) => n + p.uses.length, 0);
    console.log(`${uses} Raku code blocks, ${list.length} different programs.`);

    const engine = opt.engine ? { dir: path.resolve(opt.engine), tag: 'local' } : await fetchEngine();
    console.log(`Running them under Raku++ (WebAssembly, ${engine.dir}) …`);
    const wasm = await runWasm(engine.dir, list.map(p => ({ id: p.id, code: p.code })), Math.min(JOBS, 4));

    const rakudoVersion = await new Promise(resolve => {
        const p = spawn(RAKUDO, ['-e', 'print $*RAKU.compiler.version']);
        let v = '';
        p.stdout.on('data', d => { v += d; });
        p.on('error', e => { console.error(`cannot run ${RAKUDO}: ${e.message}`); process.exit(1); });
        p.on('close', () => resolve(v.trim()));
    });
    // A program Raku++ never finished is out whatever Rakudo does (and is mostly
    // a server that would only time out again), and the second Rakudo run is
    // only there to tell a steady result from a changing one.
    console.log(`… and under Rakudo ${rakudoVersion}, ${JOBS} at a time …`);
    const rakudo = await pool(list.filter(p => !wasm.results.get(p.id).timeout), JOBS, async p => {
        const a = await runRakudo(p.code);
        return [a, a.rc === 0 ? await runRakudo(p.code) : null];
    }, 'Rakudo');

    const runnable = [], left = [];
    for (const p of list) {
        const [a, b] = rakudo.get(p.id) || [];
        const why = verdict(p, a, b, wasm.results.get(p.id));
        if (why) left.push({ p, why }); else runnable.push(p);
    }

    writeData(runnable, `Rakudo ${rakudoVersion} and Raku++ ${wasm.version} (raku.online ?v=${engine.tag})`);

    const blocks = ps => ps.reduce((n, p) => n + p.uses.length, 0);
    const en = ps => ps.reduce((n, p) => n + p.uses.filter(u => u.lang === 'en').length, 0);
    console.log(`\n${runnable.length} programs get a Run button: ${blocks(runnable)} blocks, ${en(runnable)} of them in English.`);
    const reasons = {};
    for (const { why } of left) {
        const r = why.replace(/ on .*|: .*/, '');
        reasons[r] = (reasons[r] || 0) + 1;
    }
    console.log(`${left.length} programs are left out:`);
    for (const [r, n] of Object.entries(reasons).sort((x, y) => y[1] - x[1])) console.log(`  ${String(n).padStart(5)}  ${r}`);
    console.log(`Wrote ${path.relative(ROOT, DATA)}.`);

    if (opt.report) {
        const text = left.map(({ p, why }) =>
            `--- ${p.uses[0].page} (block ${p.uses[0].index + 1}): ${why}\n`
            + p.code.split('\n').map(l => '    ' + l).join('\n') + '\n').join('\n');
        fs.writeFileSync(opt.report, text);
        console.log(`Wrote ${opt.report}.`);
    }
})();
