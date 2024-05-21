---
title: "Розв'язок: Квадрати і куби в циклі"
---

{% include menu.html %}

## Код

Ось код розв'язку. Цикл `for` використовує діапазон від `-5` до `5`.

```raku
for -5 .. 5 -> $n {
    say "$n\t{$n²}\t{$n³}";
}
```

🦋 Знайдіть програму у файлі [squares-and-cubes-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/squares-and-cubes-loop.raku).

## Приклад

Запустіть програму і перевірте результат.

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