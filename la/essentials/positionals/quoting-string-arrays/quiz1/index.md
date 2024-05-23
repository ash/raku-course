---
title: Quiz — Quoting string arrays
---

{% include menu.html %}

Reprehendo, pro quibus ex ordinibus, elementum cum indice `1` litteram `B` continet. Aliis verbis, `dic @array[1]` imprimit `B`.

{:.quiz}
1 | mea @array = &lt;A B C&gt;;
1 | mea @array = &apos;A&apos;, &apos;B&apos;, &apos;C&apos;;
0 | mea @array = <&apos;A&apos;, &apos;B&apos;, &apos;C&apos;>; | Elementa huius ordinis et notas et etiam commam continent: `'B',`.
1 | mea @array = [&apos;A&apos;, &apos;B&apos;, &apos;C&apos;];
1 | mea @array = (&apos;A&apos;, &apos;B&apos;, &apos;C&apos;);

{% include quiz.html %}

{% include nav.html %}