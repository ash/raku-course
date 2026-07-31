---
title: 'Solution: Sobrescribir la dinámica'
translations_gpt: true
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
sub log-it($msg) {
    say "$*prefix: $msg";
}

sub task {
    log-it('working');
}

{
    my $*prefix = 'INFO';
    task();
}

{
    my $*prefix = 'DEBUG';
    task();
}
```

🦋 Puedes encontrar el código fuente en el archivo [override-dynamic.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/override-dynamic.raku).

## Salida

```
INFO: working
DEBUG: working
```

## Comentarios

1. `task` llama a `log-it` pero nunca menciona `$*prefix`. El valor aún llega a `log-it`, porque la búsqueda dinámica sigue la pila de llamadas hacia afuera — pasando por `task` — hasta quien esté en la pila en ese momento.

1. Los dos bloques establecen valores diferentes, así que la *misma* llamada a `task()` produce un prefijo diferente cada vez. Esto es lo que hace útiles a las variables dinámicas: el contexto fluye hacia código profundamente anidado sin necesidad de pasarlo a través de cada rutina intermedia como argumento.

{% include nav.html %}
