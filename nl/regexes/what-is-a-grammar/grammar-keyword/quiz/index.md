---
title: 'Quiz — Wat is een grammatica'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
my token greet { 'hi' }

say so 'hi there' ~~ / <greet> /;
```

{:.quiz}
1 | True
0 | False
0 | ｢greet｣
0 | hi

{% include quiz.html %}

<div class="extended-explanation">

Het benoemde token `greet` matcht de letterlijke tekst `hi`. Het als `<greet>` binnen het patroon aanroepen zoekt naar die tekst, die aan het begin van `'hi there'` aanwezig is, dus slaagt de match en geeft `so` `True` terug.

</div>

{% include nav.html %}
