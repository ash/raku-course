---
title: 'Oplossing: Een geërfd attribuut'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

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

🦋 Je kunt de broncode vinden in het bestand [inherited-attribute.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/inherited-attribute.raku).

## Uitvoer

```
2
4
```

## Opmerkingen

1. `Bike` en `Car` erven allebei het attribuut `wheels` (en zijn accessor) van `Vehicle`. Geen van beide declareert het attribuut opnieuw vanaf nul — ze geven het geërfde attribuut alleen een standaardwaarde, respectievelijk `2` en `4`.

1. Omdat de standaardwaarde in elke klasse is ingebakken, kun je de objecten met een simpele `Bike.new` en `Car.new` maken, en leest de geërfde accessor het juiste aantal wielen terug.

1. Je kunt de waarde nog steeds expliciet meegeven, bijvoorbeeld `Car.new(wheels => 3)`, en een expliciet argument overschrijft de standaardwaarde. Maar omdat een fiets of een auto hoogstwaarschijnlijk al met zijn gebruikelijke aantal wielen komt, houden de standaardwaarden het gewone geval eenvoudig en laten ze toch ruimte voor de enkele uitzondering.

{% include nav.html %}
