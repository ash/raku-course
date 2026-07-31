---
title: Esperar a que termine
translations_gpt:
---

{% include menu.html %}

`await` es la manera explícita de esperar, pero el código reactivo también espera, solo que de forma implícita. Un bloque `react` no termina hasta que todos los flujos que observa están acabados, lo que te da la misma garantía de «todo se ha completado»:

```raku
my @values;

react {
    whenever Supply.from-list(2, 4, 6) {
        @values.push($_);
    }
}

say [+] @values; # 12
```

El `say` se ejecuta solo **después** de que el bloque react haya terminado, así que `@values` ya contiene todos los valores emitidos. En efecto, el bloque `react` esperó el flujo por ti.

Este es un patrón útil: usa un bloque `react` para recoger todo lo que emite un flujo y trabaja después con el resultado recogido en la línea siguiente, con la seguridad de que el flujo está completo. Ya esperes una promesa con `await` o un flujo con `react`, el principio es el mismo: detenerse hasta que el trabajo concurrente esté hecho y continuar entonces con sus resultados.

{% include nav.html %}
