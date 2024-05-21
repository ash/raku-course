---
title: Quiz — Quoting string arrays
---

{% include menu.html %}

Pārbaudiet, kurām no masīviem elements ar indeksu `1` satur burtu `B`. Citiem vārdiem sakot, `say @array[1]` izdrukā `B`.

{:.quiz}
1 | my @array = &lt;A B C&gt;;
1 | my @array = &apos;A&apos;, &apos;B&apos;, &apos;C&apos;;
0 | my @array = <&apos;A&apos;, &apos;B&apos;, &apos;C&apos;>; | Šī masīva elementi satur gan pēdiņas, gan pat komatu: `'B',`.
1 | my @array = [&apos;A&apos;, &apos;B&apos;, &apos;C&apos;];
1 | my @array = (&apos;A&apos;, &apos;B&apos;, &apos;C&apos;);

{% include quiz.html %}

{% include nav.html %}