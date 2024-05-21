---
title: Quiz — Citando arreglos de cadenas
---

{% include menu.html %}

Verifica, para cuál de los arreglos, el elemento con índice `1` contiene la letra `B`. En otras palabras, `say @array[1]` imprime `B`.

{:.quiz}
1 | my @array = &lt;A B C&gt;;
1 | my @array = &apos;A&apos;, &apos;B&apos;, &apos;C&apos;;
0 | my @array = <&apos;A&apos;, &apos;B&apos;, &apos;C&apos;>; | Los elementos de este arreglo contienen tanto las comillas como incluso la coma: `'B',`.
1 | my @array = [&apos;A&apos;, &apos;B&apos;, &apos;C&apos;];
1 | my @array = (&apos;A&apos;, &apos;B&apos;, &apos;C&apos;);

{% include quiz.html %}

{% include nav.html %}