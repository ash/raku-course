---
title: Viktorīna — Atribūti
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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
1 | (Any) | Programma grib izdrukāt `y`, kas nekad netika uzstādīts
0 | kļūda

{% include quiz.html %}

{% include nav.html %}
