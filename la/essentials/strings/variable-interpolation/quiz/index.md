---
title: 'Quiz: String interpolation'
---

{% include menu.html %}

Select the strings, where the value of `$x` is interpolated exactly one time.

{:.quiz}
1 | &quot;The temperature is $x degrees&quot;
0 | &apos;Air pressure is $x mmHg&apos; | Nulla interpolatio in singulis quotationibus.
0 | &apos;The value of \\$x is $x&apos; | Nulla interpolatio et nulla evasio. Imprimit `The value of \$x is $x`.
1 | &quot;The value of \\$x is $x&quot; | Tota locutio dat, exempli gratia, `The value of $x is 42`.
0 | &quot;The value of $x is $x&quot; | `$x` bis interpolatur hic.

{% include quiz.html %}
{% include nav.html %}