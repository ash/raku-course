---
title: 'Solution: Un trait personalizado'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my %role;

multi sub trait_mod:<is>(Routine:D $r, :$role!) {
    %role{$r.name} = $role;
}

sub login() is role('admin') { }

say %role<login>;
```

🦋 Puedes encontrar el código fuente en el archivo [custom-trait.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/custom-trait.raku).

## Salida

```
admin
```

## Comentarios

1. El trait es un `multi sub trait_mod:<is>` cuyo parámetro nombrado `:$role!` lo activa para `is role(...)`. A diferencia de un trait de solo presencia, este *recibe* el argumento: `is role('admin')` vincula `'admin'` a `$role`.

1. El cuerpo almacena ese valor bajo el nombre de la subrutina. Leer `%role<login>` después devuelve `admin`. (Los traits se ejecutan en tiempo de compilación, así que la entrada ya existe para cuando el programa se ejecuta.)

{% include nav.html %}
