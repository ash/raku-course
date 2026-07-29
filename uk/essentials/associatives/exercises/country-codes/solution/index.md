---
title: 'Solution: Коди країн'
---

{% include menu.html %}

У цій програмі перетворення коду на назву здійснюється за допомогою хеш-пошуку `%cc{$_}` у циклі по масиву `@codes`.

## Код

Ось можливе рішення (не всі країни показані):

```raku
my %cc =
    AD => 'Андорра',
    AE => 'Об'єднані Арабські Емірати',

    # . . .

    ZM => 'Замбія',
    ZW => 'Зімбабве'
;

my @codes = < FR IT DE EE LV US CN IN BR >;

say %cc{$_} for @codes;
```

🦋 Знайдіть програму у файлі [country-codes.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/country-codes.raku).

## Вивід

Для даних вхідних кодів програма виводить наступний список країн:

```console
$ raku exercises/associatives/country-codes.raku
Франція
Італія
Німеччина
Естонія
Латвія
Сполучені Штати Америки
Китай
Індія
Бразилія
```

{% include nav.html %}