---
title: 'Solution: Назви місяців'
---

{% include menu.html %}

У цій програмі назви місяців беруться з масиву `@months`, який містить дванадцять рядків. Оскільки індекси масиву починаються з 0, нам потрібно зменшити вхідне число на 1 перед тим, як звертатися до масиву.

## Код

Ось рішення:

```raku
my @months = <
    January February March April
    May June July August
    September October November December
>;

say @months[@*ARGS[0] - 1];
```

🦋 Знайдіть програму у файлі [months-names.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/months-names.raku).

## Вивід

Спробуйте кілька запусків програми, щоб побачити різні назви місяців.

```console
$ raku exercises/positionals/months-names.raku 5
May

$ raku exercises/positionals/months-names.raku 1
January

$ raku exercises/positionals/months-names.raku 12
December
```

## Стиль

Ви можете самостійно вибрати один із можливих способів форматування списків, як у цій програмі. Порівняйте кілька варіантів:

```raku
my @months = <
    January February March April
    May June July August
    September October November December >;
```

Або:

```raku
my @months = < January   February March    April
               May       June     July     August
               September October  November December >;
```

Ви також можете перерахувати всі місяці в одному рядку.

```raku
my @months = < January February March April May June July August September October November December >;
```

{% include nav.html %}