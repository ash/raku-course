---
title: 'Решение: Опишете клас'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
class Animal {
}

class Dog is Animal {
}

say Dog.^name;
say Dog.^mro.elems;
say 'Cat' ∈ Dog.^mro.map(*.^name);
```

🦋 Намерете програмата във файла [describe-a-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/object-introspection/describe-a-class.raku).

## Изход

```
Dog
4
False
```

## Коментари

1. `.^name` връща собственото име на класа — `Dog`.

1. `.^mro` връща веригата на наследяване, а `.elems` я преброява. Във веригата има четири типа — `Dog`, родителят му `Animal` и универсалните `Any` и `Mu`, — така че броят е `4`.

1. `.^mro.map(*.^name)` превръща тази верига в списък от имена на типове — `(Dog Animal Any Mu)`. Операторът за принадлежност към множество `∈` след това проверява дали `Cat` е сред тях. `Dog` не произхожда от никакъв `Cat`, така че отговорът е `False`.

{% include nav.html %}
