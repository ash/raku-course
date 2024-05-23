---
title: 'Solutio: Indices Impares'
---

{% include menu.html %}

Ad hanc quaestionem solvendam, potes uti constructo `loop` et incrementare variabilem loop per 2 in unaquaque iteratione. Sed etiam potes uti `for` loop et percurrere numeros a 1 ad dimidium longitudinis array, et deinde eos multiplicare per duo.

## Codex

Hic est solutio:

```raku
my @data = 10, 12, 1, 5, -9, 8, 36, 18, 21;

say @data[2 * $_ - 1] for 1 .. @data/2;
```

🦋 Inveni programmatum in archivo [odd-indices.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/odd-indices.raku).

## Output

Primum, currite programmatum cum elementis originalibus datae.

```console
$ raku exercises/positionals/odd-indices.raku
12
5
8
18
```

Deinde, addite unum item plus ad data:

```raku
my @data = 10, 12, 1, 5, -9, 8, 36, 18, 21, 22;
```

Confirmate novum elementum cum indice impari apparere in output:

```console
$ raku exercises/positionals/odd-indices.raku
12
5
8
18
22
```

## Commentarii

In proxima parte cursus, ad hanc quaestionem redibimus ut eam solvemus alio modo omnino.

{% include nav.html %}