---
title: Solutio ‘Numeri argumentorum lineae mandati’
---

{% include menu.html %}

Solutio est satis simplex.

## Codex

```raku
say @*ARGS.elems;
```

Aliter, potes omnes methodos concatenare:

```raku
@*ARGS.elems.say;
```

🦋 Invenias programmatum in fasciculo [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/number-of-command-line-arguments.raku).

## Effectus

Hoc programma requirit probationem duorum casuum:

1. Nulli argumenti praeteriti.
1. Nonnulli numeri argumentorum praeteriti.

```console
$ raku exercises/positionals/number-of-command-line-arguments.raku
0

$ raku exercises/positionals/number-of-command-line-arguments.raku one 2 three 4 five 6 seven
7
```

{% include nav.html %}