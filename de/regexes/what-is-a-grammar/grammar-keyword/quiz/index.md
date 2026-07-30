---
title: 'Quiz — Was ist eine Grammatik'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

Das benannte Token `greet` trifft den wörtlichen Text `hi`. Es als `<greet>` im Muster aufzurufen sucht nach diesem Text, der am Anfang von `'hi there'` steht, der Treffer gelingt also, und `so` liefert `True`.

</div>

{% include nav.html %}
