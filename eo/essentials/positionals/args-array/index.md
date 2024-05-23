---
title: La @*ARGS tabelo
---

{% include menu.html %}

Ĝis nun, kiam tabeloj estas enkondukitaj, estas bona momento renkonti unu el la enkonstruitaj tabeloj, `@*ARGS`. La `*` en ĝia nomo estas la dua sigelo, aŭ _tŭigelo_, kaj ni vidos pli da ili en la estonteco. Sed por nun, ni profitu de tiu speciala tabelo. Ĝi enhavas la argumentojn, kiujn la programo ricevas de la komanda linio.

Konsideru la sekvan programon:

```console
$ raku run.raku alfa beta
```

La programo `run.raku` ricevas du parametrojn: `alfa` kaj `beta`. Ili povas esti legataj el `@*ARGS`.

```raku
say @*ARGS.elems;
say @*ARGS[0];
say @*ARGS[1];
```

Ĉi tiu programo presas la nombron de argumentoj pasigitaj al ĝi kaj la argumentojn mem:

```console
$ raku run.raku alfa beta
2
alfa
beta
```

Rimarku, ke la programo ne postulas ŝanĝon se vi vokas ĝin kiel efektivigebla dosiero:

```console
$ ./run.raku alfa beta
```

La programo, en ĉi tiu kazo, [devas havi shebangon](/eo/essentials/running-programs/from-command-line), sed la plej grava afero estas, ke la indeksoj de `@*ARGS` ankoraŭ komenciĝas per `0`:

```raku
#!/usr/bin/env raku

say @*ARGS.elems;
say @*ARGS[0];
say @*ARGS[1];
```

{% include nav.html %}