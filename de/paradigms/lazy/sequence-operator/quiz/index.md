---
title: 'Quiz — Der Sequenzoperator'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
say (3, 6 ... 15);
```

{:.quiz}
0 | (3 6)
0 | (3 6 15)
1 | (3 6 9 12 15)
0 | (3 6 9 12 15 18)

{% include quiz.html %}

<div class="extended-explanation">

Aus `3, 6` schließt der Operator auf einen Schritt von `+3` und läuft weiter, bis er den Endpunkt `15` erreicht: `3, 6, 9, 12, 15`.

</div>

{% include nav.html %}
