---
title: 'Solution: Un map con dos puntos'
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say (1..10).map(* * 2).grep: * > 10;
```

🦋 Encuentra el programa en el archivo [colon-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-map.raku).

## Salida

```
(12 14 16 18 20)
```

## Comentarios

1. Solo `grep`, la última llamada en la cadena, puede usar la forma con dos puntos. Los dos puntos hacen que `* > 10` sea su argumento, exactamente como lo haría `grep(* > 10)`. Como aun necesitamos imprimir los resultados, `say` se usa ahora como función, no como método.

1. La llamada a `map` debe conservar sus paréntesis. Si escribieras `.map: * * 2` en su lugar, los dos puntos se tragarían `.grep(* > 10)` como parte de los argumentos de `map`, y la cadena se rompería.

{% include nav.html %}
