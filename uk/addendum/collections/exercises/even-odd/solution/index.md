---
title: Розв'язання вправи «Розділіть на парні та непарні»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @numbers = 1..10;

my @even = @numbers.grep(* %% 2);
my @odd  = @numbers.grep(* % 2);

say "even: @even[]";
say "odd: @odd[]";
```

🦋 Знайдіть програму у файлі [even-odd.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/even-odd.raku).

## Вивід

```
even: 2 4 6 8 10
odd: 1 3 5 7 9
```

## Коментарі

1. `* %% 2` істинне для чисел, що діляться на два; `* % 2` істинне тоді, коли
остача ненульова, тобто для непарних. Кожен `grep` залишає одну групу.

1. Інтерполяція `@even[]` із дзен-зрізом у порожніх дужках друкує елементи,
розділені пробілами, усередині рядка в подвійних лапках.

{% include nav.html %}
