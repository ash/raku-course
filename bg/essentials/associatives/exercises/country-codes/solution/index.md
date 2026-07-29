---
title: 'Solution: Кодове на държави'
---

{% include menu.html %}

В тази програма, преобразуването на код в име се извършва чрез хеш търсене `%cc{$_}` в цикъл над масива `@codes`.

## Код

Ето възможното решение (не всички държави са показани):

```raku
my %cc =
    AD => 'Андора',
    AE => 'Обединени арабски емирства',

    # . . .

    ZM => 'Замбия',
    ZW => 'Зимбабве'
;

my @codes = < FR IT DE EE LV US CN IN BR >;

say %cc{$_} for @codes;
```

🦋 Намерете програмата във файла [country-codes.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/country-codes.raku).

## Изход

За дадените входни кодове, програмата отпечатва следния списък с държави:

```console
$ raku exercises/associatives/country-codes.raku
Франция
Италия
Германия
Естония
Латвия
Съединени американски щати
Китай
Индия
Бразилия
```

{% include nav.html %}