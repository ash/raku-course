---
title: 'Solvo: Kvadratoj kaj kuboj en ripeto'
---

{% include menu.html %}

## Kodo

Jen la kodo de la solvo. La `for` buklo uzas intervalon kiu etendiĝas de `-5` ĝis `5`.

```raku
for -5 .. 5 -> $n {
    say "$n\t{$n²}\t{$n³}";
}
```

🦋 Trovu la programon en la dosiero [squares-and-cubes-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/squares-and-cubes-loop.raku).

## Ekzemplo

Rulu la programon kaj kontrolu la rezulton.

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