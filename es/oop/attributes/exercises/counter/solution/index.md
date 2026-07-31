---
title: 'Solución: Un contador'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Counter {
    has $.count is rw = 0;
}

my $c = Counter.new;
say $c.count;

$c.count++ for ^5;

say $c.count;
```

🦋 Puedes encontrar el código fuente en el archivo [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/counter.raku).

## Salida

```
0
5
```

## Comentarios

1. El atributo se declara `is rw` para que su accesor devuelva un contenedor escribible, y `= 0` le da un valor de partida. El primer `say` confirma que un contador recién creado arranca de verdad en ese valor por defecto, `0`.

1. Como el accesor es escribible, incrementarlo con `++` funciona como cabe esperar.

{% include nav.html %}
