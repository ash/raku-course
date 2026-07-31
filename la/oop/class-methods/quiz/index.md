---
title: Quiz — Methodi classis
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit? Methodus `n` nullis attributis utitur.

```raku
class T {
    method n { 42 }
}

say T.n + T.new.n;
```

{:.quiz}
0 | 42
1 | 84
0 | (T)
0 | errorem

{% include quiz.html %}

{% include nav.html %}
