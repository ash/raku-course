---
title: Herencia
translations_gpt:
---

{% include menu.html %}

La _herencia_ permite que una clase se construya sobre otra. Una clase declarada con `is` después de su nombre hereda los atributos y los métodos de la clase que nombra: su clase _padre_ (o _base_).

```raku
class Animal {
    has $.name;
    method speak {
        'some sound';
    }
}

class Dog is Animal {
}
```

`Dog is Animal` significa que un `Dog` es una clase de `Animal`. Sin escribir nada nuevo, `Dog` ya tiene el atributo `name` y el método `speak` de `Animal`:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.name;  # Rex
say $rex.speak; # some sound
```

Un objeto `Dog` también se reconoce como `Animal`:

```raku
say Dog.new ~~ Animal; # True
```

El smart-match `~~` contra un tipo es verdadero cuando el objeto es de ese tipo o hereda de él. El tema siguiente muestra cómo una clase hija puede sustituir un método heredado por una versión propia.

{% include nav.html %}
