---
title: 'Oplossing: Noem het type'
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

my $felix = Cat.new;

say $felix.WHAT;
say $felix.WHAT === Cat.WHAT;
say $felix.WHAT === Dog.WHAT;
```

🦋 Je kunt de broncode vinden in het bestand [name-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/name-the-type.raku).

## Uitvoer

```
(Cat)
True
False
```

## Opmerkingen

1. `WHAT` geeft het typeobject terug, tussen haakjes getoond als `(Cat)` — `$felix` is een `Cat`.

1. `===` vergelijkt twee typeobjecten op identiteit. `$felix.WHAT === Cat.WHAT` is `True` omdat Felix werkelijk een `Cat` is, terwijl `$felix.WHAT === Dog.WHAT` `False` is — een `Cat` en een `Dog` zijn verschillende typen, dus hun typeobjecten zijn niet hetzelfde.

{% include nav.html %}
