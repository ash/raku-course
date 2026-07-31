---
title: Viktorīna — Kas ir gramatika
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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

Nosauktais marķieris `greet` piemeklē burtisko tekstu `hi`. Izsaucot to raksturā kā `<greet>`, tiek meklēts šis teksts, kas ir klāt virknes `'hi there'` sākumā, tāpēc sakritība izdodas un `so` atgriež `True`.

</div>

{% include nav.html %}
