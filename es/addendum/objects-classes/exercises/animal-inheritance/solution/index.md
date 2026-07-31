---
title: 'Solución: Animales que hablan'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

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

🦋 Puedes encontrar el código fuente en el archivo [animal-inheritance.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/animal-inheritance.raku).

## Salida

```
Rex says Woof
Tom says Meow
```

## Comentarios

1. `greet` se define una sola vez en la clase base, pero llama a `self.speak`. Como
`self` es el objeto real, la llamada alcanza el `speak` propio de la subclase.

1. Esto es polimorfismo: el mismo `greet` produce `Woof` para un perro y `Meow` para un
gato sin ningún código condicional.

{% include nav.html %}
