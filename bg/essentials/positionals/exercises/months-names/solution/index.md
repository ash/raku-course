---
title: 'Solution: Имена на месеци'
---

{% include menu.html %}

В тази програма, имената на месеците се вземат от масива `@months`, който съдържа дванадесет низа. Тъй като индексите на масива започват от 0, трябва да намалим входния номер с 1 преди да използваме индексацията на масива.

## Код

Ето решението:

```raku
my @months = <
    January February March April
    May June July August
    September October November December
>;

say @months[@*ARGS[0] - 1];
```

🦋 Намерете програмата във файла [months-names.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/months-names.raku).

## Изход

Опитайте няколко изпълнения на програмата, за да видите различни имена на месеците.

```console
$ raku exercises/positionals/months-names.raku 5
May

$ raku exercises/positionals/months-names.raku 1
January

$ raku exercises/positionals/months-names.raku 12
December
```

## Стил

Вие решавате кой от възможните начини за форматиране на списъците като този в програмата да изберете. Сравнете няколко опции:

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

Можете също така да изброите всички месеци на един ред.

```raku
my @months = < January February March April May June July August September October November December >;
```

{% include nav.html %}