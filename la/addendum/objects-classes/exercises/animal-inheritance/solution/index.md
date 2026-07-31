---
title: 'Solutio: Animalia quae loquuntur'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [animal-inheritance.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/animal-inheritance.raku).

## Exitus

```
Rex says Woof
Tom says Meow
```

## Commentarii

1. `greet` semel in classe fundamentali definitur, sed `self.speak` vocat. Quia
`self` obiectum actuale est, vocatio ad `speak` proprium classis subditae pervenit.

1. Haec polymorphia est: idem `greet` `Woof` pro cane et `Meow` pro
fele producit sine ullo codice condicionali.

{% include nav.html %}
