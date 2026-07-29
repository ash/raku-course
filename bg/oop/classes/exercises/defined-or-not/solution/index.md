---
title: 'Решение: Дефиниран или не'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
class Cat {
}

class Dog {
}

for Cat, Dog, Cat.new, Dog.new -> $thing {
    say $thing.defined;
}
```

🦋 Намерете програмата във файла [defined-or-not.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/defined-or-not.raku).

## Изход

```
False
False
True
True
```

## Коментари

1. Цикълът обхожда смес от обекти на типа (`Cat`, `Dog`) и екземпляри (`Cat.new`, `Dog.new`).

1. И двата обекта на типа са недефинирани, така че `defined` връща `False` за тях; и двата екземпляра са дефинирани, така че връща `True`. Дефинираността зависи от това дали стойността е обект на типа, или истински екземпляр — а не от това към кой клас принадлежи.

{% include nav.html %}
