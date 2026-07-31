---
title: Quiz — El flujo hacia atrás
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my @out <== map(* + 1) <== (10, 20, 30);
say @out;
```

{:.quiz}
1 | [11 21 31]
0 | [31 21 11]
0 | [30 20 10]
0 | [10 20 30]

{% include quiz.html %}

<div class="extended-explanation">

`<==` cambia solo la dirección en la que se escribe la tubería, no el orden de los datos. La fuente `(10, 20, 30)` entra — con el destino a la izquierda — y `map(* + 1)` suma uno a cada elemento en su sitio, dando `[11 21 31]`. Un flujo hacia atrás nunca invierte los elementos; para eso necesitarías un `reverse` explícito.

</div>

{% include nav.html %}
