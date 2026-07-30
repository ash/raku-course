---
title: 'Oplossing: Dieren die spreken'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class Animal {
    has $.name;
    method speak { '...' }
    method greet { "{$.name} says {self.speak}" }
}

class Dog is Animal { method speak { 'Woof' } }
class Cat is Animal { method speak { 'Meow' } }

for Dog.new(name => 'Rex'), Cat.new(name => 'Tom') -> $pet {
    say $pet.greet;
}
```

🦋 Je kunt de broncode vinden in het bestand [animal-inheritance.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/animal-inheritance.raku).

## Uitvoer

```
Rex says Woof
Tom says Meow
```

## Opmerkingen

1. `greet` is één keer in de basisklasse gedefinieerd, maar roept `self.speak` aan. Omdat
`self` het werkelijke object is, bereikt de aanroep de eigen `speak` van de subklasse.

1. Dat is polymorfisme: dezelfde `greet` levert `Woof` op voor een hond en `Meow` voor
een kat, zonder enige voorwaardelijke code.

{% include nav.html %}
