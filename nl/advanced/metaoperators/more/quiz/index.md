---
title: Quiz — Hyper en cross
translations_gpt: 'Quiz — Hyper en cross'
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
say (1, 2, 3) »+» 10;
```

{:.quiz}
1 | (11 12 13)
0 | (11 2 3)
0 | 16
0 | 6

{% include quiz.html %}

<div class="extended-explanation">

De hyper-meta-operator `>>+>>` past `+` toe op elk element. Met een enkele waarde `10` aan de rechterkant wordt die waarde over de hele lijst uitgestrekt, zodat elk element `10` erbij krijgt: `(11 12 13)`. (Een reductie `[+]` zou de lijst in plaats daarvan tot de enkele som `6` samenvouwen.)

</div>

{% include nav.html %}
