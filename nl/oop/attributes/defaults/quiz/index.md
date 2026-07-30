---
title: 'Quiz — Attributen'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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
1 | (Any) | Het programma wil `y` afdrukken, dat nooit gezet is
0 | een fout

{% include quiz.html %}

{% include nav.html %}
