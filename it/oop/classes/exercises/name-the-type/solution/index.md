---
title: 'Soluzione: Indicate il tipo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [name-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/name-the-type.raku).

## Output

```
(Cat)
True
False
```

## Commenti

1. `WHAT` restituisce l'oggetto di tipo, mostrato fra parentesi come `(Cat)` — `$felix` è un `Cat`.

1. `===` confronta due oggetti di tipo per identità. `$felix.WHAT === Cat.WHAT` è `True` perché Felix è davvero un `Cat`, mentre `$felix.WHAT === Dog.WHAT` è `False` — un `Cat` e un `Dog` sono tipi diversi, quindi i loro oggetti di tipo non coincidono.

{% include nav.html %}
