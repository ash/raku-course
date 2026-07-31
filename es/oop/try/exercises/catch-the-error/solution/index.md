---
title: 'Solución: Capture el error'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $ok = try { 6 * 7 };
say $ok;

my $bad = try { die 'broken' };
say $bad.defined;
say $!.message;
```

🦋 Puedes encontrar el código fuente en el archivo [catch-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/catch-the-error.raku).

## Salida

```
42
False
broken
```

## Comentarios

1. Cuando el bloque se ejecuta sin errores, `try` simplemente vale el valor del bloque, así que `$ok` contiene `42`.

1. El `die` dentro del segundo bloque lanza una excepción, así que ese bloque vale un valor no definido y `$bad.defined` es `False`.

1. La excepción capturada se guarda en la variable especial `$!`, y `$!.message` devuelve el texto que se le dio, `broken`.

{% include nav.html %}
