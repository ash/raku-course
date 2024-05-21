---
title: De @*ARGS array
---

{% include menu.html %}

Nu arrays zijn geïntroduceerd, is het een goed moment om een van de ingebouwde arrays te leren kennen, `@*ARGS`. De `*` in de naam is het tweede sigil, of _twigil_, en we zullen er in de toekomst meer van zien. Maar voor nu, laten we de voordelen van het gebruik van die speciale array bekijken. Het bevat de argumenten die het programma van de commandoregel krijgt.

Overweeg de volgende programma-uitvoering:

```console
$ raku run.raku alpha beta
```

Het programma `run.raku` krijgt twee parameters: `alpha` en `beta`. Deze kunnen worden gelezen van `@*ARGS`.

```raku
say @*ARGS.elems;
say @*ARGS[0];
say @*ARGS[1];
```

Dit programma print het aantal argumenten dat eraan is doorgegeven en de argumenten zelf:

```console
$ raku run.raku alpha beta
2
alpha
beta
```

Merk op dat het programma geen wijzigingen vereist als je het als een uitvoerbaar bestand aanroept:

```console
$ ./run.raku alpha beta
```

Het programma moet in dit geval [een shebang hebben](/nl/essentials/running-programs/from-command-line), maar het belangrijkste is dat de indices van `@*ARGS` nog steeds beginnen met `0`:

```raku
#!/usr/bin/env raku

say @*ARGS.elems;
say @*ARGS[0];
say @*ARGS[1];
```

{% include nav.html %}