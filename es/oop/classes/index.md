---
title: Clases
translations_gpt:
---

{% include menu.html %}

Hasta ahora los tipos de datos que has usado — números, cadenas, arrays y demás — venían todos incorporados en Raku. La _programación orientada a objetos_ te permite definir tipos propios, llamados _clases_, y crear valores de esos tipos, llamados _objetos_.

Una clase se define con la palabra clave `class`, seguida de un nombre y un bloque:

```raku
class Dog {
}
```

Esta clase `Dog` está vacía por ahora, pero ya es un tipo nuevo. Para crear un objeto de la clase — una _instancia_ — llama al método `new` sobre el nombre de la clase:

```raku
class Dog {
}

my $rex = Dog.new;
say $rex; # Dog.new
```

Ahora la variable `$rex` contiene un objeto `Dog`. Cada llamada a `new` crea un objeto distinto:

```raku
my $rex = Dog.new;
my $fido = Dog.new;
```

`$rex` y `$fido` son dos perros distintos, aunque la clase todavía no tenga contenido. En las secciones siguientes darás a una clase datos propios (los _atributos_) y comportamiento propio (los _métodos_). El primer tema examina más de cerca la diferencia entre una clase y sus instancias.

{% include nav.html %}
