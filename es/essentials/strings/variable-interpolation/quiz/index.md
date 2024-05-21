---
title: 'Cuestionario: Interpolación de cadenas'
---

{% include menu.html %}

Selecciona las cadenas, donde el valor de `$x` se interpola exactamente una vez.

{:.quiz}
1 | &quot;La temperatura es $x grados&quot;
0 | &apos;La presión del aire es $x mmHg&apos; | No hay interpolación en comillas simples.
0 | &apos;El valor de \\$x es $x&apos; | No hay interpolación ni escape. Imprime `El valor de \$x es $x`.
1 | &quot;El valor de \\$x es $x&quot; | La frase completa da, por ejemplo, `El valor de $x es 42`.
0 | &quot;El valor de $x es $x&quot; | `$x` se interpola dos veces aquí.

{% include quiz.html %}
{% include nav.html %}