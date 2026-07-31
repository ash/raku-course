---
title: Quiz — Ereditarietà fra grammatiche
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
grammar Base {
    token TOP  { <word> }
    token word { 'cat' }
}

grammar Pet is Base {
    token word { 'dog' }
}

say Pet.parse('dog').defined;
```

{:.quiz}
1 | True
0 | False
0 | ｢cat｣
0 | ｢dog｣

{% include quiz.html %}

<div class="extended-explanation">

`Pet` eredita `TOP` da `Base` ma sovrascrive il token `word` perché riconosca `dog`. Quando `Pet` analizza `'dog'` viene usato il suo `word`, quindi l'analisi riesce e `.defined` è `True`.

</div>

{% include nav.html %}
