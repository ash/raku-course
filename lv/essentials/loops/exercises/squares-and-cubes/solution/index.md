---
title: 'Risinājums: Kvadrāti un kubi ciklā'
---

{% include menu.html %}

## Kods

Šeit ir risinājuma kods. `for` cikls izmanto diapazonu no `-5` līdz `5`.

```raku
for -5 .. 5 -> $n {
    say "$n\t{$n²}\t{$n³}";
}
```

🦋 Atrodi programmu failā [squares-and-cubes-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/squares-and-cubes-loop.raku).

## Piemērs

Palaid programmu un pārbaudi rezultātu.

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