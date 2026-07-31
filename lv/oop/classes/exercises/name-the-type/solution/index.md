---
title: 'Risinājums: Nosauciet tipu'
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

my $felix = Cat.new;

say $felix.WHAT;
say $felix.WHAT === Cat.WHAT;
say $felix.WHAT === Dog.WHAT;
```

🦋 Atrodiet programmu failā [name-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/name-the-type.raku).

## Izvade

```
(Cat)
True
False
```

## Komentāri

1. `WHAT` atgriež tipa objektu, kas iekavās parādīts kā `(Cat)` — `$felix` ir `Cat`.

1. `===` salīdzina divus tipa objektus pēc identitātes. `$felix.WHAT === Cat.WHAT` ir `True`, jo Fēlikss patiešām ir `Cat`, turpretī `$felix.WHAT === Dog.WHAT` ir `False` — `Cat` un `Dog` ir dažādi tipi, tāpēc to tipa objekti nav viens un tas pats.

{% include nav.html %}
