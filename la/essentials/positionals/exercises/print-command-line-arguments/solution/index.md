---
title: Solutio ‘Argumentorum mandati lineae imprimere’
---

{% include menu.html %}

Programma argumenta e linea mandati in serie `@*ARGS` accipit. Ergo, necesse est ut super eius elementis iteremus.

## Codex

```raku
.say for @*ARGS;
```

🦋 Invenies programmatum in archivo [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/print-command-line-arguments.raku).

## Effectus

Programma exsequi et confirma argumenta linea per lineam imprimere:

```console
$ raku exercises/positionals/print-command-line-arguments.raku hello command-line arguments
hello
command-line
arguments
```

{% include nav.html %}