---
title: Quiz — Asserzioni
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
say 'a=5' ~~ / <?after '='> \d+ /;
```

{:.quiz}
1 | ｢5｣
0 | ｢=5｣
0 | ｢a=5｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Il lookbehind positivo `<?after '='>` richiede un `=` immediatamente prima della posizione corrente, poi `\d+` riconosce le cifre. L'`=` viene controllato ma non consumato, quindi la corrispondenza è solo `｢5｣`.

</div>

{% include nav.html %}
