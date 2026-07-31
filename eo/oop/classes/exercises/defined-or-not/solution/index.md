---
title: 'Solvo: Difinita aŭ ne'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
class Cat {
}

class Dog {
}

for Cat, Dog, Cat.new, Dog.new -> $thing {
    say $thing.defined;
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [defined-or-not.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/defined-or-not.raku).

## Eligo

```
False
False
True
True
```

## Komentoj

1. La buklo iras tra miksaĵo de tipobjektoj (`Cat`, `Dog`) kaj ekzempleroj (`Cat.new`, `Dog.new`).

1. Ambaŭ tipobjektoj estas nedifinitaj, do `defined` redonas `False` por ili; ambaŭ ekzempleroj estas difinitaj, do ĝi redonas `True`. Difiniteco dependas de tio, ĉu valoro estas tipobjekto aŭ vera ekzemplero — ne de tio, al kiu klaso ĝi apartenas.

{% include nav.html %}
