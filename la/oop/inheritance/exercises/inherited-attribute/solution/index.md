---
title: 'Solutio: Attributum hereditatum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [inherited-attribute.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/inherited-attribute.raku).

## Exitus

```
2
4
```

## Commentarii

1. `Bike` et `Car` utraque attributum `wheels` (eiusque accessorem) ex `Vehicle` heredat. Neutra attributum ab initio iterum declarat — solum hereditato valorem praedefinitum dant, `2` et `4` respective.

1. Quia valor praedefinitus in unamquamque classem coctus est, obiecta simplici `Bike.new` et `Car.new` creare potes, et accessor hereditatus rectum rotarum numerum relegit.

1. Valorem tamen expresse tradere potes, exempli gratia `Car.new(wheels => 3)`, et argumentum expressum valorem praedefinitum superat. Sed quoniam birota vel autocinetum verisimiliter iam solitum rotarum numerum habet, valores praedefiniti casum communem simplicem servant dum loco exceptionis rarae spatium relinquunt.

{% include nav.html %}
