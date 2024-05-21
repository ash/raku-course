---
title: Soluzione di ‘Square and cubes’
---

{% include menu.html %}

## Codice 1

Una soluzione semplice è utilizzare l'operatore `**`.

```raku
my $n = @*ARGS[0];
say $n ** 2;
say $n ** 3;
```

🦋 Trova il programma nel file [square-and-cube.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/square-and-cube.raku).

## Codice 2

Una soluzione leggermente più elegante è utilizzare i pedici Unicode.

```raku
my $n = @*ARGS[0];
say $n²;
say $n³;
```

🦋 Trova il programma nel file [square-and-cube-2.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/square-and-cube-2.raku).

## Output

Esegui il programma alcune volte e testalo con numeri diversi.

```console
$ raku exercises/positionals/square-and-cube.raku 5
25
125
```

{% include nav.html %}