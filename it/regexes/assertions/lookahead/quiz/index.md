---
title: Quiz — Lookahead
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
say '5 cm' ~~ / \d+ <?before ' cm'> /;
```

{:.quiz}
1 | ｢5｣
0 | ｢5 cm｣
0 | False
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

Il lookahead positivo `<?before ' cm'>` richiede che le cifre siano seguite da ` cm`, e lo sono. L'asserzione controlla quel testo ma non lo consuma, quindi la corrispondenza è solo le cifre, `｢5｣`.

</div>

{% include nav.html %}
