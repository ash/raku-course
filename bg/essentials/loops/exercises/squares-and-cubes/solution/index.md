---
title: 'Solution: Квадрати и кубове в цикъл'
---

{% include menu.html %}

## Код

Ето кода на решението. Цикълът `for` използва диапазон, който обхваща от `-5` до `5`.

```raku
for -5 .. 5 -> $n {
    say "$n\t{$n²}\t{$n³}";
}
```

🦋 Намерете програмата във файла [squares-and-cubes-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/squares-and-cubes-loop.raku).

## Пример

Стартирайте програмата и проверете резултата.

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