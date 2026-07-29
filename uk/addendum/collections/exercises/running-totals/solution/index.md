---
title: Розв'язання вправи «Наростаючі підсумки»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @numbers = 2, 4, 6, 8;

my $sum = 0;
my @totals = @numbers.map({ $sum += $_ });

say @totals;
```

🦋 Знайдіть програму у файлі [running-totals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/running-totals.raku).

## Вивід

```
[2 6 12 20]
```

## Коментарі

1. Блок тримає наростаючу `$sum` у змінній поза map. Кожен виклик додає поточний
елемент і повертає нову суму, тож відображений список є послідовністю часткових
сум.

1. У Raku це є вбудованим. [Трикутна згортка](/uk/advanced/metaoperators/reduction)
`[\+]` зберігає кожну часткову суму, тож усе розв'язання є одним виразом:

    ```raku
    my @numbers = 2, 4, 6, 8;
    say [\+] @numbers; # (2 6 12 20)
    ```

    Вона повертає `Seq`, тож її загальний вигляд використовує круглі дужки —
    `(2 6 12 20)`, — а не масивні `[2 6 12 20]`, але числа ті самі.

{% include nav.html %}
