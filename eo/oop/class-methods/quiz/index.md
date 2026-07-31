---
title: Kvizo — Klasmetodoj
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo? La metodo `n` uzas neniujn atributojn.

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
0 | eraron

{% include quiz.html %}

{% include nav.html %}
