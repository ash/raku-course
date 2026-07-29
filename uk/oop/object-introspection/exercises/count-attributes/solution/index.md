---
title: 'Розв''язання: Порахуйте атрибути'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
class Point {
    has $.x;
    has $.y;
}

say Point.^attributes.elems;
```

🦋 Вихідний код можна знайти у файлі [count-attributes.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/object-introspection/count-attributes.raku).

## Вивід

```
2
```

## Коментарі

1. `.^attributes` повертає список атрибутів класу.

1. `.elems` їх рахує. Клас `Point` оголошує два атрибути, тож відповідь — `2`.

{% include nav.html %}
