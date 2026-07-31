---
title: El caso base
translations_gpt:
---

{% include menu.html %}

Toda subrutina recursiva necesita un _caso base_: una condición en la que devuelve una respuesta **sin** volver a llamarse a sí misma. Sin él, la subrutina se llamaría a sí misma para siempre.

En el factorial, el caso base era «`$n` es `1` o menos». Aquí tienes otro ejemplo, que cuenta hacia atrás hasta cero:

```raku
sub countdown($n) {
    return if $n < 1;   # base case: stop
    say $n;
    countdown($n - 1);  # recursive step
}

countdown(3);
```

El programa imprime:

```
3
2
1
```

La primera línea es el caso base: cuando `$n` baja de `1`, la subrutina retorna de inmediato y la cadena de llamadas termina. El paso recursivo siempre avanza **hacia** el caso base llamando a `countdown` con un número más pequeño.

Si olvidas el caso base, o si los pasos nunca lo alcanzan, la recursión no se detiene y el programa acaba fallando. Una subrutina recursiva correcta siempre tiene dos cosas: un caso base que termina la recursión y un paso que acerca cada llamada a él.

{% include nav.html %}
