---
title: 'Risinājums: Saskaitiet atribūtus'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class Point {
    has $.x;
    has $.y;
}

say Point.^attributes.elems;
```

🦋 Atrodiet programmu failā [count-attributes.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/object-introspection/count-attributes.raku).

## Izvade

```
2
```

## Komentāri

1. `.^attributes` atgriež klases atribūtu sarakstu.

1. `.elems` tos saskaita. Klase `Point` deklarē divus atribūtus, tāpēc atbilde ir `2`.

{% include nav.html %}
