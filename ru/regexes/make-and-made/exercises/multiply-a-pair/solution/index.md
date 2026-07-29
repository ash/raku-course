---
title: 'Решение: Перемножьте пару'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
grammar Product {
    token TOP { <a> '*' <b> { make $<a>.Int * $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Product.parse('4*5').made;
```

🦋 Исходный код можно найти в файле [multiply-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/multiply-a-pair.raku).

## Вывод

```
20
```

## Комментарии

1. Два числа захватываются как `<a>` и `<b>`, каждое преобразуется через `.Int`.

1. Встроенный блок объединяет подсовпадения — перемножает их — и сохраняет результат
на совпадении, который затем и возвращает `made`.

{% include nav.html %}
