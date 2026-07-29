---
title: 'Решение: Пребройте атрибутите'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
class Point {
    has $.x;
    has $.y;
}

say Point.^attributes.elems;
```

🦋 Намерете програмата във файла [count-attributes.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/object-introspection/count-attributes.raku).

## Изход

```
2
```

## Коментари

1. `.^attributes` връща списъка с атрибутите на класа.

1. `.elems` ги преброява. Класът `Point` декларира два атрибута, така че отговорът е `2`.

{% include nav.html %}
