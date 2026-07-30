---
title: 'Oplossing: Beschrijf een klasse'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class Animal {
}

class Dog is Animal {
}

say Dog.^name;
say Dog.^mro.elems;
say 'Cat' ∈ Dog.^mro.map(*.^name);
```

🦋 Je kunt de broncode vinden in het bestand [describe-a-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/object-introspection/describe-a-class.raku).

## Uitvoer

```
Dog
4
False
```

## Opmerkingen

1. `.^name` geeft de eigen naam van de klasse terug, `Dog`.

1. `.^mro` geeft de overervingsketen terug, en `.elems` telt hem. Er zitten vier typen in de keten — `Dog`, zijn ouder `Animal`, en de universele `Any` en `Mu` — dus het aantal is `4`.

1. `.^mro.map(*.^name)` zet die keten om in de lijst met typenamen, `(Dog Animal Any Mu)`. De verzamelingsoperator `∈` controleert vervolgens of `Cat` daarbij hoort. `Dog` stamt niet af van enige `Cat`, dus het antwoord is `False`.

{% include nav.html %}
