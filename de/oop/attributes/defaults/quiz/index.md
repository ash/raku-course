---
title: 'Quiz — Attribute'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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
1 | (Any) | Das Programm will `y` ausgeben, das nie gesetzt wurde
0 | ein Fehler

{% include quiz.html %}

{% include nav.html %}
