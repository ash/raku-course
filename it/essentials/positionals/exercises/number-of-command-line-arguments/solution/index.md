---
title: Soluzione di ‘Il numero di argomenti della riga di comando’
---

{% include menu.html %}

La soluzione è piuttosto semplice.

## Codice

```raku
say @*ARGS.elems;
```

In alternativa, puoi concatenare tutti i metodi:

```raku
@*ARGS.elems.say;
```

🦋 Trova il programma nel file [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/number-of-command-line-arguments.raku).

## Output

Questo programma richiede un test di due casi:

1. Nessun argomento passato.
1. Un numero non nullo di argomenti passati.

```console
$ raku exercises/positionals/number-of-command-line-arguments.raku
0

$ raku exercises/positionals/number-of-command-line-arguments.raku one 2 three 4 five 6 seven
7
```

{% include nav.html %}