---
title: Розв'язання вправи «Друге за величиною значення»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @numbers = 3, 9, 4, 9, 1, 7;

my @distinct = @numbers.Set.keys.sort;

say @distinct[*-2];
```

🦋 Знайдіть програму у файлі [second-largest.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/second-largest.raku).

## Вивід

```
7
```

## Коментарі

1. Перетворення списку на `Set` через `.Set` відкидає повторювану `9`, бо множина
тримає кожне значення лише раз.

1. `.keys` повертає різні значення — усе ще `Int`, а не рядки, — тож звичайний
`.sort` упорядковує їх числово. Друге за величиною тоді стоїть на одну позицію
перед кінцем: `[*-2]`.

{% include nav.html %}
