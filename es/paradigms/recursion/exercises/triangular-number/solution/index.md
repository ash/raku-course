---
title: 'Solución: Número triangular'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
multi tri(0)  { 0 }
multi tri($n) { $n + tri($n - 1) }

say tri(5);
```

🦋 Puedes encontrar el código fuente en el archivo [triangular-number.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/triangular-number.raku).

## Salida

```
15
```

## Comentarios

1. El caso base es un candidato propio: `multi tri(0)` coincide solo cuando el argumento es exactamente `0` y devuelve `0` sin recurrir.

1. Cualquier otra llamada aterriza en `multi tri($n)`, que suma `$n` al número triangular de `$n - 1`. Las llamadas descienden `5 + 4 + 3 + 2 + 1 + 0`, y cuando el argumento llega a `0` el despacho cambia al candidato del caso base y la suma se desenrolla hasta `15`.

{% include nav.html %}
