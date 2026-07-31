---
title: 'Solución: Componga dos funciones'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
sub compose(&f, &g) {
    return -> $x { f(g($x)) };
}

my $combined = compose(* * 2, * + 1);

say $combined(5);
```

🦋 Puedes encontrar el código fuente en el archivo [compose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/compose.raku).

## Salida

```
12
```

## Comentarios

1. Los parámetros `&f` y `&g` aceptan cualquier invocable; aquí las funciones Whatever
`* * 2` y `* + 1`.

1. `compose` devuelve una función anónima nueva `-> $x { f(g($x)) }`. Llamarla con `5`
ejecuta primero `g` (`5 + 1`), después `f` (`6 * 2`), dando `12`.

{% include nav.html %}
