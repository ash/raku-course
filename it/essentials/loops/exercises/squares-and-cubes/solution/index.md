---
title: 'Soluzione: Quadrati e cubi in un ciclo'
---

{% include menu.html %}

## Codice

Ecco il codice della soluzione. Il ciclo `for` utilizza un intervallo che va da `-5` a `5`.

```raku
for -5 .. 5 -> $n {
    say "$n\t{$n²}\t{$n³}";
}
```

🦋 Trova il programma nel file [squares-and-cubes-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/squares-and-cubes-loop.raku).

## Esempio

Esegui il programma e verifica il risultato.

```console
$ raku exercises/loops/squares-and-cubes-loop.raku
-5	25	-125
-4	16	-64
-3	9	-27
-2	4	-8
-1	1	-1
0	0	0
1	1	1
2	4	8
3	9	27
4	16	64
5	25	125
```

{% include nav.html %}