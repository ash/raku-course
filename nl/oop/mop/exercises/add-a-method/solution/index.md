---
title: 'Oplossing: Voeg een methode toe'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class Dog {
    has $.name;
}

Dog.^add_method('speak', method { $.name ~ ' says woof' });

say Dog.new(name => 'Rex').speak;
```

🦋 Je kunt de broncode vinden in het bestand [add-a-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/add-a-method.raku).

## Uitvoer

```
Rex says woof
```

## Opmerkingen

1. `.^add_method` hangt tijdens het draaien een nieuwe methode aan het metaobject van de klasse, gegeven als een anonieme `method { … }`.

1. De toegevoegde methode is een echte methode van de klasse, dus binnen die methode bereikt `$.name` het attribuut `name` van het object, precies zoals een in de klassebody geschreven methode zou doen. Na de aanroep reageert elke `Dog` op `.speak`.

{% include nav.html %}
