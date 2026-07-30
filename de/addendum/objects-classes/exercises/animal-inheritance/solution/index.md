---
title: 'Lösung: Tiere, die sprechen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

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

🦋 Du findest den Quellcode in der Datei [animal-inheritance.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/animal-inheritance.raku).

## Ausgabe

```
Rex says Woof
Tom says Meow
```

## Kommentare

1. `greet` ist einmal in der Basisklasse bestimmt, ruft aber `self.speak` auf. Weil `self`
das tatsächliche Objekt ist, erreicht der Aufruf das eigene `speak` der Unterklasse.

1. Das ist Polymorphie: Dasselbe `greet` erzeugt für einen Hund `Woof` und für eine Katze
`Meow`, ganz ohne bedingten Code.

{% include nav.html %}
