---
title: Quiz — Attributa
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
class P {
    has $.x = 7;
    has $.y;
}

say P.new(x => 1).y;
```

{:.quiz}
0 | 1
0 | 7
1 | (Any) | Programma `y` imprimere vult, quod numquam positum est
0 | errorem

{% include quiz.html %}

{% include nav.html %}
