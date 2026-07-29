---
title: 'Решение: От двух до четырёх'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say 'abcdef' ~~ / \w ** 2..4 /;
```

🦋 Исходный код можно найти в файле [range-quantifier.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/range-quantifier.raku).

## Вывод

```
｢abcd｣
```

## Комментарии

1. `\w ** 2..4` соответствует от двух до четырёх словесных символов.

1. Будучи жадным, он берёт столько, сколько позволяет диапазон, — четыре, — поэтому совпадение
равно `abcd`.

{% include nav.html %}
