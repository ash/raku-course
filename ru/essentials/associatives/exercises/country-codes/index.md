---
title: 'Упражнение: Коды стран'
---

{% include menu.html %}

## Задача

У вас есть список двухбуквенных кодов стран в массиве:

```raku
my @codes = < FR IT DE EE LV US CN IN BR >;
```

Дополните программу, чтобы она выводила полные названия этих стран, по одному на строку. Используйте файл [cc.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/country-codes/cc.raku) с хэшем, который сопоставляет коды стран с их названиями.

## Пример

Вывод программы показан ниже. Показаны только первые несколько названий:

```console
$ raku country-codes.raku
France
Italy
Germany
. . .
```

## Решение

✅ [См. решение](solution)

{% include nav.html %}