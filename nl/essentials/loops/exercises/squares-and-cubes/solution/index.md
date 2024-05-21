---
title: 'Oplossing: Kwadraten en kubussen in een lus'
---

{% include menu.html %}

## Code

Hier is de code van de oplossing. De `for` lus gebruikt een bereik dat loopt van `-5` tot `5`.

```raku
for -5 .. 5 -> $n {
    say "$n\t{$n²}\t{$n³}";
}
```

🦋 Vind het programma in het bestand [squares-and-cubes-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/squares-and-cubes-loop.raku).

## Voorbeeld

Voer het programma uit en controleer het resultaat.

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