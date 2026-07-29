---
title: 'Решение: Умножете двойка'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
grammar Product {
    token TOP { <a> '*' <b> { make $<a>.Int * $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Product.parse('4*5').made;
```

🦋 Намерете програмата във файла [multiply-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/multiply-a-pair.raku).

## Изход

```
20
```

## Коментари

1. Двете числа се прихващат като `<a>` и `<b>`, като всяко се преобразува с `.Int`.

1. Вграденият блок съчетава подсъвпаденията — умножава ги — и съхранява резултата върху съвпадението, което `made` след това връща.

{% include nav.html %}
