---
title: 'Solución: Dos conexiones'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $s = Supply.from-list(1, 2, 3);

my @doubled;
my @tripled;
$s.map(* * 2).tap(-> $v { @doubled.push($v) });
$s.map(* * 3).tap(-> $v { @tripled.push($v) });

say @doubled;
say @tripled;
```

🦋 Puedes encontrar el código fuente en el archivo [two-taps.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/two-taps.raku).

## Salida

```
[2 4 6]
[3 6 9]
```

## Comentarios

1. `Supply.from-list` es bajo demanda, así que reproduce su secuencia completa para **cada** enganche, de forma independiente.

1. Eso permite que los dos enganches ejecuten tuberías distintas sobre la misma fuente: uno duplica, el otro triplica. Cada uno ve todo `1, 2, 3`, así que los resultados son `[2 4 6]` y `[3 6 9]`.

{% include nav.html %}
