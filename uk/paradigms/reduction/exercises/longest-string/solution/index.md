---
title: Розв'язання вправи «Найдовший рядок»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @animals = 'cat', 'elephant', 'dog', 'fox';

say @animals.reduce(-> $a, $b { $b.chars > $a.chars ?? $b !! $a });
```

🦋 Знайдіть програму у файлі [longest-string.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/longest-string.raku).

## Вивід

```
elephant
```

## Коментарі

1. Блок лишає довший зі своїх двох аргументів: `$a` — це найдовший рядок, побачений досі, `$b` — наступний, а тернарний оператор повертає той, у якому більше символів.

1. `reduce` несе цього переможця далі як `$a` на наступному виклику, тож після обходу всього списку накопичене значення є найдовшим рядком з усіх — `elephant`.

{% include nav.html %}
