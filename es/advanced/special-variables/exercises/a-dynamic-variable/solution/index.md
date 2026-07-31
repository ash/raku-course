---
title: 'Solution: Una variable dinámica'
translations_gpt: true
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
my $*user = 'guest';

sub whoami {
    say "running as $*user";
}

whoami();

{
    my $*user = 'admin';
    whoami();
}
```

🦋 Puedes encontrar el código fuente en el archivo [a-dynamic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/a-dynamic-variable.raku).

## Salida

```
running as guest
running as admin
```

## Comentarios

1. El twigil `*` hace que `$*user` sea dinámica. `whoami` nunca la recibe como parámetro — encuentra el valor buscando hacia afuera a través de la pila de llamadas, así que la primera llamada reporta el valor predeterminado `guest`.

1. El bloque interno redeclara `$*user` como `admin` durante la duración de ese bloque. La *misma* `whoami` ahora ve `admin`, porque la búsqueda dinámica sigue a quien está actualmente en la pila. Sobreescribir una variable dinámica en un ámbito es la forma de otorgar contexto elevado a todo lo que se llame desde él — sin modificar `whoami` en absoluto.

{% include nav.html %}
