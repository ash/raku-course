---
title: Quiz — Grammaticae et hereditas
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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

`Pet` `TOP` ex `Base` heredat sed tesseram `word` superscribit ut `dog` congruat. Cum `Pet` `'dog'` analysat, propria eius `word` adhibetur, itaque analysis succedit et `.defined` est `True`.

</div>

{% include nav.html %}
