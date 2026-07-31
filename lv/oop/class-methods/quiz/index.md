---
title: Viktorīna — Klases metodes
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma? Metode `n` neizmanto nevienu atribūtu.

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
0 | kļūda

{% include quiz.html %}

{% include nav.html %}
