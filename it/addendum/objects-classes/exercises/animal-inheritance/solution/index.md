---
title: 'Soluzione: Animali che parlano'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [animal-inheritance.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/animal-inheritance.raku).

## Output

```
Rex says Woof
Tom says Meow
```

## Commenti

1. `greet` è definito una volta sola nella classe base, ma chiama `self.speak`. Poiché
`self` è l'oggetto vero e proprio, la chiamata raggiunge lo `speak` della sottoclasse.

1. Questa è polimorfia: lo stesso `greet` produce `Woof` per un cane e `Meow` per un gatto
senza alcun codice condizionale.

{% include nav.html %}
