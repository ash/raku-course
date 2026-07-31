---
title: 'Solución: Dos hilos'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my ($x, $y);
my $a = Thread.start({ $x = 10 * 10 });
my $b = Thread.start({ $y = 20 * 20 });
$a.finish;
$b.finish;
say $x + $y;
```

🦋 Puedes encontrar el código fuente en el archivo [two-threads.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/two-threads.raku).

## Salida

```
500
```

## Comentarios

1. Los dos hilos corren de forma concurrente, cada uno escribiendo su resultado en su propia variable compartida.

1. La lectura de `$x` y `$y` ocurre solo **después** de las dos llamadas a `.finish`, así que los resultados tienen garantizado estar listos: `100 + 400` es `500`. Unir antes de leer es lo que hace fiable el valor.

{% include nav.html %}
