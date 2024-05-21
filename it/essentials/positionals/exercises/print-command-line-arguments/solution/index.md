---
title: Soluzione di ‘Stampa gli argomenti della riga di comando’
---

{% include menu.html %}

Il programma ottiene gli argomenti dalla riga di comando nell'array `@*ARGS`. Quindi, dobbiamo iterare sui suoi elementi.

## Codice

```raku
.say for @*ARGS;
```

🦋 Trova il programma nel file [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/print-command-line-arguments.raku).

## Output

Esegui il programma e conferma che stampa gli argomenti riga per riga:

```console
$ raku exercises/positionals/print-command-line-arguments.raku hello command-line arguments
hello
command-line
arguments
```

{% include nav.html %}