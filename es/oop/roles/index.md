---
title: Roles
translations_gpt:
---

{% include menu.html %}

Un _rol_ es un paquete de comportamiento (y a veces de datos) que varias clases pueden compartir. Mientras que la herencia dice que una clase _es_ una clase de otra, un rol describe algo que una clase _sabe hacer_.

Un rol se define con la palabra clave `role`, casi como una clase, y se le da a una clase con el rasgo `does`:

```raku
role Greet {
    method hello {
        'Hello from ' ~ self.name;
    }
}

class Person does Greet {
    has $.name;
}
```

La clase `Person` tiene ahora el método `hello` del rol, como si estuviera escrito en la propia clase:

```raku
say Person.new(name => 'Anna').hello; # Hello from Anna
```

Una clase que asume un rol se reconoce como portadora de ese rol:

```raku
say Person.new(name => 'Anna') ~~ Greet; # True
```

Fíjate en que el método `hello` del rol usa `self.name`, aunque el rol mismo no tiene ningún atributo `name`. No pasa nada: el método se ejecuta como parte de la clase que compone el rol, y esa clase aporta `name`. El tema siguiente muestra que una clase puede asumir más de un rol a la vez.

{% include nav.html %}
