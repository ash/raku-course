---
title: 'Solutio: Print argumentorum lineae mandati'
---

{% include menu.html %}

Programma argumenta e linea mandati in serie `@*ARGS` accipit. Ergo, necesse est ut super eius elementis iteremus.

## Codex

```raku
.say for @*ARGS;
```

🦋 Inveni codicem fontem in archivo [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/print-command-line-arguments.raku).

## Exitus

Programma exsequi et confirma argumenta linea per lineam imprimere:

```console
$ raku exercises/positionals/print-command-line-arguments.raku hello command-line arguments
hello
command-line
arguments
```

{% include nav.html %}