---
title: Oplossing van ‘Het aantal commandoregelargumenten’
---

{% include menu.html %}

De oplossing is vrij eenvoudig.

## Code

```raku
say @*ARGS.elems;
```

Als alternatief kun je alle methoden ketenen:

```raku
@*ARGS.elems.say;
```

🦋 Vind het programma in het bestand [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/number-of-command-line-arguments.raku).

## Uitvoer

Dit programma vereist een test van twee gevallen:

1. Geen argumenten doorgegeven.
1. Een niet-nul aantal argumenten doorgegeven.

```console
$ raku exercises/positionals/number-of-command-line-arguments.raku
0

$ raku exercises/positionals/number-of-command-line-arguments.raku one 2 three 4 five 6 seven
7
```

{% include nav.html %}