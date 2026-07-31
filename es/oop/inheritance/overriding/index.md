---
title: Sobrescribir métodos
translations_gpt:
---

{% include menu.html %}

Una clase hija puede ofrecer su propia versión de un método heredado. A esto se le llama _sobrescribir_. Cuando el método se llama sobre un objeto de la clase hija, se ejecuta la versión de la hija en lugar de la del padre.

```raku
class Animal {
    has $.name;
    method speak {
        'some sound';
    }
    method intro {
        "$.name says " ~ self.speak;
    }
}

class Dog is Animal {
    method speak {
        'Woof';
    }
}

class Cat is Animal {
    method speak {
        'Meow';
    }
}
```

`Dog` y `Cat` sobrescriben cada uno `speak`. El método `intro`, heredado sin cambios de `Animal`, llama a `self.speak`, y esa llamada usa el `speak` que pertenezca al objeto real:

```raku
say Dog.new(name => 'Rex').intro; # Rex says Woof
say Cat.new(name => 'Tom').intro; # Tom says Meow
```

Así que el mismo `intro` heredado produce resultados distintos, porque cada objeto trae su propio `speak`. Esta es una de las ideas centrales de la programación orientada a objetos: código compartido que se adapta a la clase concreta de objeto sobre la que trabaja.

{% include nav.html %}
