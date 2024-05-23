---
title: 'Solutio: Quadrata et cubi in circulo'
---

{% include menu.html %}

## Codex

Hic est codex solutionis. Circulus `for` utitur intervallo quod extenditur a `-5` ad `5`.

```raku
for -5 .. 5 -> $n {
    say "$n\t{$n²}\t{$n³}";
}
```

🦋 Invenies programmatum in archivo [squares-and-cubes-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/squares-and-cubes-loop.raku).

## Exemplum

Curre programmatum et resultatum inspice.

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