---
title: 'Oplossing: Zoek een methode'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class Animal {
    method speak { 'generic' }
}

class Dog is Animal {
}

say so Dog.^find_method('speak');
```

🦋 Je kunt de broncode vinden in het bestand [find-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/find-method.raku).

## Uitvoer

```
True
```

## Opmerkingen

1. `.^find_method` geeft de methode terug als die bestaat, of een ongedefinieerde waarde als dat niet zo is. De `so` maakt daar een simpele boolean van.

1. `Dog` definieert zelf geen methoden, en toch is het resultaat `True`: `find_method` doorzoekt de hele overervingsketen en vindt `speak` boven in `Animal`. Dit weerspiegelt hoe een echte methodeaanroep op een `Dog` de geërfde methode zou vinden.

{% include nav.html %}
