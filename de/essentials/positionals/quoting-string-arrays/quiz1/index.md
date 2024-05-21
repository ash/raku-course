---
title: Quiz — Quoting string arrays
---

{% include menu.html %}

Prüfen Sie, für welche der Arrays das Element mit dem Index `1` den Buchstaben `B` enthält. Mit anderen Worten, `say @array[1]` gibt `B` aus.

{:.quiz}
1 | my @array = &lt;A B C&gt;;
1 | my @array = &apos;A&apos;, &apos;B&apos;, &apos;C&apos;;
0 | my @array = <&apos;A&apos;, &apos;B&apos;, &apos;C&apos;>; | Die Elemente dieses Arrays enthalten sowohl die Anführungszeichen als auch das Komma: `'B',`.
1 | my @array = [&apos;A&apos;, &apos;B&apos;, &apos;C&apos;];
1 | my @array = (&apos;A&apos;, &apos;B&apos;, &apos;C&apos;);

{% include quiz.html %}

{% include nav.html %}