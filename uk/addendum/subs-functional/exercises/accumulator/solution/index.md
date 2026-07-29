---
title: Розв'язання вправи «Наростаючий акумулятор»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
sub make-accumulator($start) {
    my $total = $start;
    return -> $amount { $total += $amount };
}

my $acc = make-accumulator(100);

say $acc(10);
say $acc(25);
say $acc(-5);
```

🦋 Знайдіть програму у файлі [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/accumulator.raku).

## Вивід

```
110
135
130
```

## Коментарі

1. Повернений блок *замикається* на `$total`: ця змінна живе між викликами, тож
кожен виклик пам'ятає суму з попереднього.

1. `$total += $amount` водночас оновлює наростаючу суму й повертає її, а це і є
те, що друкує кожен `say`: `110`, потім `135`, потім `130`.

1. Альтернатива тримає суму всередині самого блоку, у змінній `state`. На відміну
від звичайної `my`, змінна `state` ініціалізується лише раз — під час першого
виконання блоку — і потім зберігає своє значення між подальшими викликами:

    ```raku
    sub make-accumulator($start) {
        return -> $amount { state $total = $start; $total += $amount };
    }

    my $acc = make-accumulator(100);
    say $acc(10);
    say $acc(25);
    say $acc(-5);
    ```

    Кожен виклик `make-accumulator` дає свіжий блок із власною `state $total`, тож
    окремі акумулятори лишаються незалежними, — а замикання на `$start` і далі
    постачає кожному його власне початкове значення.

{% include nav.html %}
