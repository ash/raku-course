---
title: Viktorīna — Metodes
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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
