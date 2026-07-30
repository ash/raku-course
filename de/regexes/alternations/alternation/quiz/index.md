---
title: 'Quiz — Gruppieren'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
say 'goodbye' ~~ / [ hello | good ] bye /;
```

{:.quiz}
1 | ｢goodbye｣
0 | ｢good｣
0 | ｢bye｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Die eckigen Klammern gruppieren die Alternation `hello | good` ohne Capture, das Muster bedeutet also „`hello` oder `good`, dann `bye`“. In `goodbye` trifft die Alternative `good`, und darauf folgt `bye`, was `｢goodbye｣` ergibt.

</div>

{% include nav.html %}
