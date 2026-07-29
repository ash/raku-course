---
title: 'Решение: Коды стран'
---

{% include menu.html %}

В этой программе преобразование кода в название осуществляется с помощью хэш-lookup `%cc{$_}` в цикле по массиву `@codes`.

## Код

Вот возможное решение (показаны не все страны):

```raku
my %cc =
    AD => 'Андорра',
    AE => 'Объединенные Арабские Эмираты',

    # . . .

    ZM => 'Замбия',
    ZW => 'Зимбабве'
;

my @codes = < FR IT DE EE LV US CN IN BR >;

say %cc{$_} for @codes;
```

🦋 Найдите программу в файле [country-codes.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/country-codes.raku).

## Вывод

Для заданных входных кодов программа выводит следующий список стран:

```console
$ raku exercises/associatives/country-codes.raku
Франция
Италия
Германия
Эстония
Латвия
Соединенные Штаты Америки
Китай
Индия
Бразилия
```

{% include nav.html %}