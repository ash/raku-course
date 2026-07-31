---
title: 'Solvo: Presi komando-linio argumentojn'
---

{% include menu.html %}

La programo ricevas la argumentojn de la komanda linio en la tabelo `@*ARGS`. Do, ni devas iteri super ĝiaj elementoj.

## Kodo

```raku
.say for @*ARGS;
```

🦋 Trovu la programon en la dosiero [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/print-command-line-arguments.raku).

## Eligo

Rulu la programon kaj konfirmu ke ĝi printas la argumentojn linio post linio:

```console
$ raku exercises/positionals/print-command-line-arguments.raku hello command-line arguments
hello
command-line
arguments
```

{% include nav.html %}