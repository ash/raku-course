---
title: Quiz — Citazione di array di stringhe
---

{% include menu.html %}

Verifica, per quali degli array, l'elemento con indice `1` contiene la lettera `B`. In altre parole, `say @array[1]` stampa `B`.

{:.quiz}
1 | my @array = &lt;A B C&gt;;
1 | my @array = &apos;A&apos;, &apos;B&apos;, &apos;C&apos;;
0 | my @array = <&apos;A&apos;, &apos;B&apos;, &apos;C&apos;>; | Gli elementi di questo array contengono sia le virgolette che anche la virgola: `'B',`.
1 | my @array = [&apos;A&apos;, &apos;B&apos;, &apos;C&apos;];
1 | my @array = (&apos;A&apos;, &apos;B&apos;, &apos;C&apos;);

{% include quiz.html %}

{% include nav.html %}