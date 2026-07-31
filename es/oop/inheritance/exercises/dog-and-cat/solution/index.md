---
title: 'Solución: Empleados y roles'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Employee {
    has $.name;
    method role {
        'staff';
    }
    method badge {
        "$.name - " ~ self.role;
    }
}

class Manager is Employee {
    method role { 'manager' }
}

class Intern is Employee {
    method role { 'intern' }
}

say Manager.new(name => 'Anna').badge;
say Intern.new(name => 'Bob').badge;
```

🦋 Puedes encontrar el código fuente en el archivo [dog-and-cat.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/dog-and-cat.raku).

## Salida

```
Anna - manager
Bob - intern
```

## Comentarios

1. `Manager` e `Intern` heredan de `Employee` el atributo `name` y el método `badge`, así que ninguna de las dos necesita repetir ese código.

1. Cada hija sobrescribe `role`. Como `badge` llama a `self.role`, recoge la versión sobrescrita que pertenece al objeto real, dando una credencial distinta para la gerente y para el becario.

1. El nombre del método, `role`, es solo un nombre. Pero coincide con la palabra clave `role` que se presentará más adelante.

{% include nav.html %}
