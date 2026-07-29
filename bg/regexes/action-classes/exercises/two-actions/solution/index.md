---
title: 'Решение: Една граматика, две действия'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [two-actions.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/two-actions.raku).

## Изход

```
30
-10
```

## Коментари

1. Граматиката описва само формата `число,число`; тя не знае нищо за това какво да се изчисли.

1. Двата класа за действия прикачват различно значение към един и същ разбор — единият събира числата, другият ги изважда. Достатъчно е да подадете различен обект `actions` на `.parse`, за да получите различен резултат, без изобщо да променяте граматиката.

{% include nav.html %}
