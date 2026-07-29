---
title: 'Решение: Разделете на четни и нечетни'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @numbers = 1..10;

my @even = @numbers.grep(* %% 2);
my @odd  = @numbers.grep(* % 2);

say "even: @even[]";
say "odd: @odd[]";
```

🦋 Намерете програмата във файла [even-odd.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/even-odd.raku).

## Изход

```
even: 2 4 6 8 10
odd: 1 3 5 7 9
```

## Коментари

1. `* %% 2` е истина за числата, делящи се на две; `* % 2` е истина, когато остатъкът
е ненулев, тоест за нечетните. Всеки `grep` запазва по една група.

1. Интерполацията на `@even[]` с дзен-среза от празни скоби отпечатва елементите,
разделени с интервали, вътре в низа с двойни кавички.

{% include nav.html %}
