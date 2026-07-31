---
title: La objekto Proc
translations_gpt:
---

{% include menu.html %}

Ĉiu voko de `run` aŭ `shell` redonas objekton `Proc` — malgrandan registron, kiu priskribas la programon, kiu ruliĝis, kaj kiel ĝi finiĝis. La antaŭaj temoj uzis ĝian tenilon `.out` por legi eligon; la `Proc` portas pli ol tion.

La plej utila parto estas la **elirkodo**. Programo diras al tiu, kiu lanĉis ĝin, ĉu ĝi sukcesis, per malgranda entjero: `0` signifas sukceson, kaj ĉiu alia nombro estas malsukcesa kodo laŭ la propra elekto de la programo. `.exitcode` donas al vi tiun nombron:

```raku
my $proc = run 'sh', '-c', 'exit 3';
say $proc.exitcode; # 3
```

Por la kutima jes/ne demando — ĉu ĝi funkciis? — `Proc` estas simple vera, kiam la elirkodo estas `0`, kaj malvera alie, do vi povas testi ĝin rekte:

```raku
my $proc = run 'ls', '/', :out;
$proc.out.slurp(:close);
say $proc ?? 'ok' !! 'failed'; # ok
```

`Proc` ankaŭ memoras la komandon, kiun ĝi lanĉis, en `.command`:

```raku
my $proc = run 'echo', 'hi', :out;
$proc.out.slurp(:close);
say $proc.command; # (echo hi)
```

Unu afero por atenti: se komando malsukcesas kaj vi simple **ignoras** la redonitan `Proc`, Raku levas escepton anstataŭ lasi la malsukceson pasi nerimarkita:

```raku
run 'sh', '-c', 'exit 1';
# mortas: The spawned command 'sh' exited unsuccessfully (exit code: 1, signal: 0)
```

Ĉar ne-nula eliro kutime signifas, ke io misiris, malsukcesa `Proc`, kiu estas forĵetita, ĵetas, kiam ĝi eliras el amplekso. La ekigilo estas *forĵeti* la rezulton, ne ignori la elirkodon: simple konservi la `Proc` en variablo sufiĉas por eviti la escepton, eĉ se vi neniam rigardas ĝin denove.

```raku
my $proc = run 'sh', '-c', 'exit 1'; # neniu eraro, kvankam ĝi malsukcesis
# …kaj $proc neniam estas uzata denove
```

Do se vi *atendas*, ke komando eble malsukcesos, tenu ĝian `Proc` kaj poste rigardu `.exitcode` (aŭ testu ĝin kiel Boolean valoron), kiam ajn vi volas scii, kio okazis.

{% include nav.html %}
