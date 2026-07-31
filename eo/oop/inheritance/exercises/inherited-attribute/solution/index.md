---
title: 'Solvo: Heredita atributo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
class Vehicle {
    has $.wheels;
}

class Bike is Vehicle {
    has $.wheels = 2;
}

class Car is Vehicle {
    has $.wheels = 4;
}

say Bike.new.wheels;
say Car.new.wheels;
```

🦋 Vi povas trovi la fontkodon en la dosiero [inherited-attribute.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/inherited-attribute.raku).

## Eligo

```
2
4
```

## Komentoj

1. `Bike` kaj `Car` ambaŭ heredas la atributon `wheels` (kaj ĝian atingilon) el `Vehicle`. Neniu el ili redeklaras la atributon de nulo — ili nur donas al la heredita defaŭltan valoron, `2` kaj `4` respektive.

1. Ĉar la defaŭlto estas enbakita en ĉiun klason, vi povas krei la objektojn per simpla `Bike.new` kaj `Car.new`, kaj la heredita atingilo relegas la ĝustan nombron de radoj.

1. Vi ankoraŭ povas transdoni la valoron eksplicite, ekzemple `Car.new(wheels => 3)`, kaj eksplicita argumento superregas la defaŭlton. Sed ĉar biciklo aŭ aŭto plej verŝajne jam venas kun sia kutima nombro de radoj, la defaŭltoj tenas la oftan kazon simpla, lasante lokon por la malofta escepto.

{% include nav.html %}
