---
title: Kvizo — Gramatikoj kaj heredo
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

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

`Pet` heredas `TOP` de `Base` sed superregas la ĵetonon `word` por kongrui kun `dog`. Kiam `Pet` analizas `'dog'`, ĝia propra `word` estas uzata, do la analizo sukcesas kaj `.defined` estas `True`.

</div>

{% include nav.html %}
