---
title: 'Quiz — Klassenmethoden'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus? Die Methode `n` verwendet keine Attribute.

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
0 | ein Fehler

{% include quiz.html %}

{% include nav.html %}
