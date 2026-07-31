---
title: Métodos
translations_gpt:
---

{% include menu.html %}

Los atributos dan a un objeto sus datos; los _métodos_ le dan comportamiento. Un método es una subrutina que pertenece a una clase y se llama sobre un objeto. Se declara con la palabra clave `method`:

```raku
class Dog {
    has $.name;

    method bark {
        return $.name ~ ' says Woof!';
    }
}
```

Llama a un método sobre un objeto usando el punto, igual que a un accesor:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.bark; # Rex says Woof!
```

Dentro de un método, el objeto sobre el que se llamó está disponible como `self`. A los atributos se llega a través de sus accesores, escritos `$.name`, `$.age` y demás. También funcionan dentro de cadenas interpoladas:

```raku
class Dog {
    has $.name;

    method greet {
        "Hello, my name is $.name";
    }
}

say Dog.new(name => 'Rex').greet; # Hello, my name is Rex
```

Los temas siguientes tratan los atributos privados (ahora que tenemos métodos para usarlos), los métodos que reciben parámetros y los métodos que llaman a otros métodos.

{% include nav.html %}
