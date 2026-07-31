---
title: 'Risinājums: Aprakstiet klasi'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class Animal {
}

class Dog is Animal {
}

say Dog.^name;
say Dog.^mro.elems;
say 'Cat' ∈ Dog.^mro.map(*.^name);
```

🦋 Atrodiet programmu failā [describe-a-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/object-introspection/describe-a-class.raku).

## Izvade

```
Dog
4
False
```

## Komentāri

1. `.^name` atgriež pašas klases nosaukumu `Dog`.

1. `.^mro` atgriež mantošanas ķēdi, un `.elems` to saskaita. Ķēdē ir četri tipi — `Dog`, tā vecākklase `Animal` un universālie `Any` un `Mu` —, tāpēc skaits ir `4`.

1. `.^mro.map(*.^name)` pārvērš šo ķēdi par tipu nosaukumu sarakstu `(Dog Animal Any Mu)`. Kopas piederības operators `∈` tad pārbauda, vai `Cat` ir viens no tiem. `Dog` necēlies ne no viena `Cat`, tāpēc atbilde ir `False`.

{% include nav.html %}
