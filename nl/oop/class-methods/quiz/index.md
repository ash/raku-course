---
title: 'Quiz — Klassemethoden'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af? De methode `n` gebruikt geen attributen.

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
0 | een fout

{% include quiz.html %}

{% include nav.html %}
