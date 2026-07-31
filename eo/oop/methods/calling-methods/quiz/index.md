---
title: Kvizo — Metodoj
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
class C {
    has $.n = 10;

    method show {
        $.n * 2;
    }
}

say C.new.show;
```

{:.quiz}
0 | 10
1 | 20
0 | 2
0 | (Int)

{% include quiz.html %}

{% include nav.html %}
