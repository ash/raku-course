---
title: Розв'язання вправи «Перемножте пару»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
grammar Product {
    token TOP { <a> '*' <b> { make $<a>.Int * $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Product.parse('4*5').made;
```

🦋 Знайдіть програму у файлі [multiply-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/multiply-a-pair.raku).

## Вивід

```
20
```

## Коментарі

1. Два числа захоплюються як `<a>` та `<b>`, і кожне перетворюється через `.Int`.

1. Вбудований блок поєднує підзбіги — перемножуючи їх — і зберігає результат на збігу, який потім повертає `made`.

{% include nav.html %}
