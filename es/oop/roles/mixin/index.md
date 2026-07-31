---
title: Añadir un rol a un objeto
translations_gpt:
---

{% include menu.html %}

Un rol no tiene por qué estar incorporado en una clase. También puedes dárselo a un objeto que ya existe, usando el operador `but`. Mezcla el rol en un único objeto en tiempo de ejecución y devuelve un objeto nuevo que asume el rol:

```raku
role Loud {
    method greet {
        callsame().uc;
    }
}

class Greeter {
    method greet {
        'Hello';
    }
}

my $quiet = Greeter.new;
my $loud  = Greeter.new but Loud;

say $quiet.greet; # Hello
say $loud.greet;  # HELLO
```

Solo `$loud` ha adquirido el rol. La clase `Greeter` y todos los demás objetos `Greeter` quedan intactos, así que `$quiet` sigue saludando de la manera ordinaria. Cuando el rol y la clase definen ambos un método con el mismo nombre, gana la versión del rol, y `callsame` llama a la que ha sobrescrito — aquí el `greet` original de `Greeter`, cuyo resultado se pasa después a mayúsculas.

Un objeto en el que se ha mezclado un rol se reconoce como portador de ese rol:

```raku
say $quiet ~~ Loud; # False
say $loud  ~~ Loud; # True
```

`but` deja el objeto original tal cual y te entrega uno nuevo. Si prefieres cambiar un objeto existente en el sitio, usa el operador `does`:

```raku
my $speaker = Greeter.new;
$speaker does Loud;
say $speaker.greet; # HELLO
```

Mezclar roles en objetos concretos te permite decidir, objeto a objeto, qué comportamiento extra debe asumir, sin definir una clase aparte para cada combinación.

{% include nav.html %}
