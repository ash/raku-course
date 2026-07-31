---
title: 'Solvo: Priskribu klason'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
class Animal {
}

class Dog is Animal {
}

say Dog.^name;
say Dog.^mro.elems;
say 'Cat' ∈ Dog.^mro.map(*.^name);
```

🦋 Vi povas trovi la fontkodon en la dosiero [describe-a-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/object-introspection/describe-a-class.raku).

## Eligo

```
Dog
4
False
```

## Komentoj

1. `.^name` redonas la propran nomon de la klaso, `Dog`.

1. `.^mro` redonas la heredan ĉenon, kaj `.elems` kalkulas ĝin. Estas kvar tipoj en la ĉeno — `Dog`, ĝia patro `Animal`, kaj la universalaj `Any` kaj `Mu` — do la kalkulo estas `4`.

1. `.^mro.map(*.^name)` transformas tiun ĉenon en la liston de tipnomoj, `(Dog Animal Any Mu)`. La ara membreca operatoro `∈` poste kontrolas, ĉu `Cat` estas unu el ili. `Dog` ne devenas de iu `Cat`, do la respondo estas `False`.

{% include nav.html %}
