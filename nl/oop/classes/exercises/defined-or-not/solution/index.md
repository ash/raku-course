---
title: 'Oplossing: Gedefinieerd of niet'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class Cat {
}

class Dog {
}

for Cat, Dog, Cat.new, Dog.new -> $thing {
    say $thing.defined;
}
```

🦋 Je kunt de broncode vinden in het bestand [defined-or-not.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/defined-or-not.raku).

## Uitvoer

```
False
False
True
True
```

## Opmerkingen

1. De lus loopt over een mengeling van typeobjecten (`Cat`, `Dog`) en instanties (`Cat.new`, `Dog.new`).

1. Beide typeobjecten zijn ongedefinieerd, dus `defined` geeft er `False` voor terug; beide instanties zijn gedefinieerd, dus geeft het `True` terug. Gedefinieerdheid hangt ervan af of een waarde een typeobject is of een echte instantie — niet van de klasse waartoe ze behoort.

{% include nav.html %}
