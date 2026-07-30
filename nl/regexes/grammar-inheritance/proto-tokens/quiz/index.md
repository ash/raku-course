---
title: 'Quiz — Overerving van grammatica'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

`Pet` erft `TOP` van `Base` maar overschrijft het token `word` zodat het `dog` matcht. Wanneer `Pet` `'dog'` ontleedt, wordt haar eigen `word` gebruikt, dus slaagt de parse en is `.defined` `True`.

</div>

{% include nav.html %}
