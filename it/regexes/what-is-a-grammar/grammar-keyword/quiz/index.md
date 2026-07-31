---
title: "Quiz — Che cos'è una grammatica"
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

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

Il token con nome `greet` riconosce il testo letterale `hi`. Chiamarlo come `<greet>` dentro lo schema cerca quel testo, che è presente all'inizio di `'hi there'`, quindi la corrispondenza riesce e `so` restituisce `True`.

</div>

{% include nav.html %}
