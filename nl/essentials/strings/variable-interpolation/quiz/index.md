---
title: 'Quiz: String interpolatie'
---

{% include menu.html %}

Selecteer de strings, waarbij de waarde van `$x` precies één keer wordt geïnterpoleerd.

{:.quiz}
1 | &quot;De temperatuur is $x graden&quot;
0 | &apos;De luchtdruk is $x mmHg&apos; | Geen interpolatie in enkele aanhalingstekens.
0 | &apos;De waarde van \\$x is $x&apos; | Geen interpolatie en geen escaping. Het print `De waarde van \$x is $x`.
1 | &quot;De waarde van \\$x is $x&quot; | De hele zin geeft bijvoorbeeld `De waarde van $x is 42`.
0 | &quot;De waarde van $x is $x&quot; | `$x` wordt hier twee keer geïnterpoleerd.

{% include quiz.html %}
{% include nav.html %}