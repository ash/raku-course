---
title: Quiz — Sumar meses
---

{% include menu.html %}

¿Qué imprime el siguiente programa?

```raku
say Date.new(2026, 1, 31).later(:months(1));
```

{:.quiz}
1 | 2026-02-28
0 | 2026-03-03
0 | 2026-02-31
0 | 2026-03-31

{% include quiz.html %}

<div class="extended-explanation">

Un mes después del 31 de enero sería el "31 de febrero", que no existe. `later` ajusta el resultado al último día válido del mes de destino, por lo que cae en el 28 de febrero de 2026 (2026 no es un año bisiesto, así que febrero tiene 28 días).

</div>

{% include nav.html %}
