---
title: 'Risinājums: Definēts vai nē'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class Cat {
}

class Dog {
}

for Cat, Dog, Cat.new, Dog.new -> $thing {
    say $thing.defined;
}
```

🦋 Atrodiet programmu failā [defined-or-not.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/defined-or-not.raku).

## Izvade

```
False
False
True
True
```

## Komentāri

1. Cikls iet pāri tipa objektu (`Cat`, `Dog`) un instanču (`Cat.new`, `Dog.new`) sajaukumam.

1. Abi tipa objekti ir nedefinēti, tāpēc `defined` tiem atgriež `False`; abas instances ir definētas, tāpēc tas atgriež `True`. Definētība ir atkarīga no tā, vai vērtība ir tipa objekts vai īsta instance, — nevis no tā, kurai klasei tā pieder.

{% include nav.html %}
