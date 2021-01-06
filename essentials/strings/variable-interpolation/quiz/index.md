---
title: 'Quiz: String interpolation'
---

{% include menu.html %}

Select the strings, where the value of `$x` is interpolated exactly one time.

{:.quiz}
1 | &quot;The temperature is $x degrees&quot;
0 | &apos;Air pressure is $x mmHg&apos; | No interpolation in single quotes.
0 | &apos;The value of \\$x is $x&apos; | No interpolation and no escaping. It prints `The value of \$x is $x`.
1 | &quot;The value of \\$x is $x&quot; | The whole phrase gives, for example, `The value of $x is 42`.
0 | &quot;The value of $x is $x&quot; | `$x` is interpolated twice here.

{% include quiz.html %}
{% include nav.html %}
