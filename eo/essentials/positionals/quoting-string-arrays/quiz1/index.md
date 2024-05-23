---
title: Kvizo — Citante ĉenajn tabelojn
---

{% include menu.html %}

Kontrolu, por kiuj el la tabeloj, la elemento kun indekso `1` enhavas la literon `B`. Alivorte, `say @array[1]` presas `B`.

{:.quiz}
1 | my @array = &lt;A B C&gt;;
1 | my @array = &apos;A&apos;, &apos;B&apos;, &apos;C&apos;;
0 | my @array = <&apos;A&apos;, &apos;B&apos;, &apos;C&apos;>; | La elementoj de ĉi tiu tabelo enhavas ambaŭ la citilojn kaj eĉ la komon: `'B',`.
1 | my @array = [&apos;A&apos;, &apos;B&apos;, &apos;C&apos;];
1 | my @array = (&apos;A&apos;, &apos;B&apos;, &apos;C&apos;);

{% include quiz.html %}

{% include nav.html %}