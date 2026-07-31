---
title: Quiz — Creare grammatiche
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
grammar Word {
    token TOP { \w+ }
}

say Word.parse('hello world').defined;
```

{:.quiz}
0 | True
1 | False
0 | ｢hello｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`.parse` riesce solo quando la grammatica riconosce l'**intera** stringa. `\w+` riconosce `hello`, ma poi restano uno spazio e `world`, quindi l'input non viene consumato per intero: `.parse` restituisce `Nil` e `.defined` è `False`.

</div>

{% include nav.html %}
