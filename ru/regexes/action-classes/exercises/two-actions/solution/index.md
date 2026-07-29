---
title: 'Решение: Одна грамматика, два класса действий'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
grammar Pair {
    token TOP { <a> ',' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class Sum  { method TOP($/) { make $<a>.Int + $<b>.Int } }
class Diff { method TOP($/) { make $<a>.Int - $<b>.Int } }

say Pair.parse('10,20', actions => Sum.new).made;
say Pair.parse('10,20', actions => Diff.new).made;
```

🦋 Исходный код можно найти в файле [two-actions.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/two-actions.raku).

## Вывод

```
30
-10
```

## Комментарии

1. Грамматика описывает лишь форму «число,число»; о том, что вычислять, она ничего не знает.

1. Два класса действий придают одному и тому же разбору разный смысл: один складывает числа,
другой вычитает. Чтобы получить другой результат, достаточно передать в `.parse` другой объект
`actions`, вообще не меняя грамматику.

{% include nav.html %}
