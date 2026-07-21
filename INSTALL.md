# Running the course locally

The course is a collection of Markdown (`.md`) files. A dedicated Raku program,
`raku-pages.raku`, builds them into a tree of static HTML files, which you then serve with any static web server.

The live site at [course.raku.org](https://course.raku.org/) is generated the same way.

## Prerequisites

You need a Raku compiler (use Rakudo — the generator itself must run under it), one Raku module, and `pandoc`. For syntax highlighting, install one of the two optional highlighters: Pygments or Raku++.

### Rakudo (the `raku` command)

    brew install rakudo          # macOS, Homebrew
    sudo port install rakudo     # macOS, MacPorts

(See the “How to install Rakudo” page at the beginning of Part 1 for other platforms and options such as online services and Docker.)

Note that the generator is run with Rakudo’s `raku` command, not with `rakupp`: parallel building (`--workers`) only works under Rakudo.

### The `YAMLish` module

The generator reads the table of contents from a YAML file, using the `YAMLish` module. Install it with `zef`:

    zef install YAMLish

If you don’t have `zef` yet:

    git clone https://github.com/ugexe/zef.git
    cd zef
    raku -I. bin/zef install .

Make sure `zef/bin/zef` is on your `PATH`.

### `pandoc`

Markdown is rendered to HTML with `pandoc`:

    brew install pandoc          # macOS, Homebrew
    sudo port install pandoc     # macOS, MacPorts

### A syntax highlighter (optional): Pygments or Raku++

Raku code blocks on the pages are colour-highlighted by one of two tools; the site builds without either, just with plain code.

**Pygments** (the default) is an external Python tool that provides the `pygmentize` command:

    pip install Pygments

**Raku++** ([github.com/ash/rakupp](https://github.com/ash/rakupp)) is the new Raku compiler, whose parse-aware `--highlight` mode can do the same job. Download a release binary or build it from source, and either put `rakupp` on your `PATH` or point the `RAKUPP` environment variable at the executable. Select it with `--highlighter=rakupp` when building.

Use `--highlighter=none` (below) to skip highlighting and build faster.

## Building the site

From the repository root, run:

    raku raku-pages.raku

This scans the Markdown files and writes the generated HTML into the **`_out/`**
directory.

Useful options:

| Command | What it does |
|---------|--------------|
| `raku raku-pages.raku` | Build every language, with syntax highlighting |
| `raku raku-pages.raku --highlighter=none` | Skip highlighting — much faster while editing |
| `raku raku-pages.raku --highlighter=rakupp` | Highlight the code with Raku++ instead of Pygments |
| `raku raku-pages.raku --language=en` | Build only one language (here, English) |
| `raku raku-pages.raku --language=en --filter=essentials` | Build only the pages whose path contains the given text |
| `raku raku-pages.raku --workers=4` | Render pages in parallel (identical output, faster) |

The `--highlighter` option accepts `pygments` (the default), `rakupp`, `auto` (prefer Pygments, fall back to Raku++), and `none`.

While working on content, this combination seems to be the most practical:

    raku raku-pages.raku --language=en --highlighter=none

## Viewing the site locally

The generated pages link to CSS, JavaScript, and images with absolute paths such as `/assets/course.css`, so you must serve the `_out/` directory **as the web root**.

The repository ships a symlink, `_out/assets → ../assets`, so the `/assets/…` paths resolve. If it is missing (for example, in a fresh clone), create it once:

    ln -sfn ../assets _out/assets

Then start any static web server from inside `_out/`. The simplest is the one built into Python — no installation needed:

    cd _out
    python3 -m http.server 8000

Now open <http://localhost:8000/> in your browser.

If you have the [Raku++](https://github.com/ash/rakupp) repository checked out, you can serve the site with `rakus` — the static web server written in Raku that ships with it (in `showcase/rakus`):

    rakupp /path/to/rakupp/showcase/rakus/rakus.raku 8000 _out

You can also compile it once into a standalone binary and use that instead:

    rakupp --exe -o rakus /path/to/rakupp/showcase/rakus/rakus.raku
    ./rakus 8000 _out

Any other static server works too. For example, with `nginx`, point the server root at the `raku-course/_out` directory.

## Editing and rebuilding

The local server does **not** rebuild automatically. After you change a Markdown file, re-run the generator and refresh the browser. To rebuild only the part you are working on, narrow the build with `--filter`, for example:

    raku raku-pages.raku --language=en --highlighter=none --filter=essentials

## Updating the runnable-code assets (Raku++ in the browser)

The **Run** button on the Addendum solution pages turns code blocks into a
play-and-edit editor. This is served entirely by the course itself — three files
in [`assets/`](assets/), so the site works even if `raku.online` is unreachable:

| File | What it is |
|------|------------|
| `assets/raku.js` | The embed widget (the Run button, the editor, the share/copy buttons). Source of truth: [`www/raku.js`](https://github.com/ash/raku.online) in the **raku.online** repository. |
| `assets/rakujs.js` + `assets/rakujs.wasm` | Raku++ compiled to WebAssembly — it both *runs* the code and *highlights* it while you edit. Built from the **[Raku++](https://github.com/ash/rakupp)** sources. |

For display, the pages use the highlighting **baked at build time** by
`--highlighter=rakupp` (above), so a page needs no WebAssembly just to *show*
code — the `~4.7 MB` `rakujs.wasm` is fetched only when a reader actually edits
or runs a block.

These files are a snapshot, so they must be refreshed whenever Raku++ or the
embed changes:

1. **Rebuild the WebAssembly** in a Raku++ checkout (needs Emscripten; `build.sh`
   bootstraps it into `rakujs/emsdk/` the first time):

       cd /path/to/rakupp
       RAKUJS_OUT=/tmp/rakujs rakujs/build.sh

   This writes `rakujs.js` and `rakujs.wasm` to the chosen directory.

2. **Copy the three files into `assets/`.** The `raku.online` repository keeps a
   matching set of all three under `www/`, so the simplest refresh is to copy
   that whole bundle:

       cp /path/to/raku.online/www/raku.js       assets/
       cp /path/to/raku.online/www/rakujs.js     assets/
       cp /path/to/raku.online/www/rakujs.wasm   assets/

   (Or copy `rakujs.js` / `rakujs.wasm` straight from step 1's output, and just
   `raku.js` from raku.online.)

3. **Bump the cache tag** so browsers pick up the new `raku.js`: in
   `raku-pages.raku`, find the embed line and increment the `?v=` number:

       my $embed = '<script src="/assets/raku.js?v=1"'   # -> ?v=2, etc.

4. **Rebuild the site** (`raku raku-pages.raku …`) and commit `raku-pages.raku`
   together with the updated `assets/raku.js`, `assets/rakujs.js`, and
   `assets/rakujs.wasm`.

The `--filter` value is matched as plain text against each page’s directory path, so `--filter=essentials/strings` rebuilds just that section.
