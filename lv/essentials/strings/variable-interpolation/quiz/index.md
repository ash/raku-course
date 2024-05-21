---
title: 'Viktorīna: Virknes interpolācija'
---

{% include menu.html %}

Izvēlieties virknes, kurās vērtība `$x` tiek interpolēta tieši vienu reizi.

{:.quiz}
1 | &quot;Temperatūra ir $x grādi&quot;
0 | &apos;Gaisa spiediens ir $x mmHg&apos; | Nav interpolācijas vienkāršajās pēdiņās.
0 | &apos;Vērtība \\$x ir $x&apos; | Nav interpolācijas un nav izvairīšanās. Tas izdrukā `Vērtība \$x ir $x`.
1 | &quot;Vērtība \\$x ir $x&quot; | Visa frāze dod, piemēram, `Vērtība $x ir 42`.
0 | &quot;Vērtība $x ir $x&quot; | `$x` šeit tiek interpolēts divreiz.

{% include quiz.html %}
{% include nav.html %}