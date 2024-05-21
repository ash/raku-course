---
title: 'Решение: Названия месяцев'
---

{% include menu.html %}

В этой программе названия месяцев берутся из массива `@months`, который содержит двенадцать строк. Поскольку индексы массива начинаются с 0, нам нужно уменьшить введенное число на 1 перед обращением к элементу массива.

## Код

Вот решение:

```raku
my @months = <
    January February March April
    May June July August
    September October November December
>;

say @months[@*ARGS[0] - 1];
```

🦋 Найдите программу в файле [months-names.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/months-names.raku).

## Вывод

Попробуйте несколько запусков программы, чтобы увидеть разные названия месяцев.

```console
$ raku exercises/positionals/months-names.raku 5
May

$ raku exercises/positionals/months-names.raku 1
January

$ raku exercises/positionals/months-names.raku 12
December
```

## Стиль

Вы можете выбрать один из возможных способов форматирования списков, как в этой программе. Сравните несколько вариантов:

```raku
my @months = <
    January February March April
    May June July August
    September October November December >;
```

Или:

```raku
my @months = < January   February March    April
               May       June     July     August
               September October  November December >;
```

Вы также можете перечислить все месяцы в одной строке.

```raku
my @months = < January February March April May June July August September October November December >;
```

{% include nav.html %}