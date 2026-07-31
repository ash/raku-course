---
title: 'Solvo: Bestoj kiuj parolas'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [animal-inheritance.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/animal-inheritance.raku).

## Eligo

```
Rex says Woof
Tom says Meow
```

## Komentoj

1. `greet` estas difinita unufoje en la baza klaso, sed ĝi vokas `self.speak`. Ĉar
`self` estas la efektiva objekto, la voko atingas la propran `speak` de la subklaso.

1. Jen polimorfismo: la sama `greet` produktas `Woof` por hundo kaj `Meow` por
kato sen ia ajn kondiĉa kodo.

{% include nav.html %}
