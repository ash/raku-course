---
title: 'Solución: Espere un fallo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $p = start { die 'boom' };

try {
    await $p;
    CATCH {
        default { say "caught: {.message}" }
    }
}
```

🦋 Puedes encontrar el código fuente en el archivo [await-failure.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-failure.raku).

## Salida

```
caught: boom
```

## Comentarios

1. El bloque de la promesa lanza una excepción, así que la promesa queda *rota*. La excepción no se pierde: se guarda hasta que alguien espera la promesa.

1. `await $p` la relanza justo ahí, donde el fáser `CATCH` la trata como cualquier excepción corriente. Así es como los errores del trabajo en segundo plano afloran allí donde esperas el resultado.

{% include nav.html %}
