---
title: Pereza y ansiedad
translations_gpt:
---

{% include menu.html %}

Algunas listas en Raku se calculan solo cuando sus elementos son necesarios: son _perezosas_ (lazy). Los prefijos `lazy` y `eager` te permiten controlar esto explícitamente.

El prefijo `eager` fuerza a que una lista se produzca **toda de una vez**, inmediatamente:

```raku
my @squares = eager (1..3).map(* ** 2);
say @squares; # [1 4 9]
```

Sin `eager`, el `map` aún produciría los valores, pero `eager` garantiza que todos se calculen en ese momento y no bajo demanda.

El prefijo `lazy` hace lo contrario: marca una lista como perezosa, de modo que sus elementos se producen solo cuando se solicitan. Esto es lo que permite que una lista sea conceptualmente infinita:

```raku
my $numbers = lazy (1 .. Inf);
say $numbers.is-lazy; # True
```

El método `.is-lazy` confirma que la lista no intentará calcular todos sus (interminables) elementos de antemano.

Este ejemplo en particular es exactamente un caso en el que Raku asumiría pereza de todos modos: un rango sin límite como `1 .. Inf` ya es perezoso, así que `say (1 .. Inf).is-lazy` imprime `True` sin el prefijo. Escribir `lazy` aquí no cambia nada, solo hace la intención explícita. El prefijo justifica su existencia cuando quieres hacer perezosa una lista que de otro modo se calcularía de forma ansiosa (eager).

La mayor parte del tiempo Raku elige sensatamente por sí solo: los rangos y secuencias son perezosos, la asignación ordinaria a un array es ansiosa. Recurre a estos prefijos cuando necesites anular esa elección: `eager` para forzar que un cálculo costoso ocurra ahora, `lazy` para diferir uno que podría ser grande o sin límite.

{% include nav.html %}
