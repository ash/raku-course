---
title: Quiz — Hyper und Kreuz
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

Der Hyper-Meta-Operator `»+»` wendet `+` auf jedes Element an. Mit einem einzelnen Wert `10` auf der rechten Seite wird dieser Wert über die gesamte Liste gestreckt, sodass jedes Element `10` dazubekommt: `(11 12 13)`. (Eine Reduktion `[+]` würde stattdessen die Liste zum einzelnen Wert `6` zusammenfassen.)

</div>

{% include nav.html %}
