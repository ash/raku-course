---
title: 'Solution: Cargar en tiempo de ejecución'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución a la tarea.

## Código

El programa, `require-import.raku`:

```raku
sub MAIN(Bool :$quiet) {
    if $quiet {
        say 'Silence.';
    }
    else {
        require Greeting <&hello>;
        say hello('Sam');
    }
}
```

🦋 Puedes encontrar ambos archivos fuente en el directorio [exercises/advanced/modules-basics/require-at-runtime](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/require-at-runtime).

## Salida

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Comentarios

1. `require` carga el módulo en tiempo de ejecución en lugar de en tiempo de compilación. Por sí solo no importa nada, por lo que un simple `hello` sería desconocido.

1. La lista `<&hello>` le indica a `require` que importe ese símbolo, por lo que después de la instrucción se puede llamar directamente a `hello('Sam')`, dando como resultado `Hello, Sam!`.

1. Para esto es `require`: dado que se ejecuta en tiempo de ejecución, puede estar dentro de un `if`. Cuando se proporciona `--quiet`, esa rama se omite y el módulo nunca se carga — algo que un `use` en tiempo de compilación no podría evitar.

{% include nav.html %}
