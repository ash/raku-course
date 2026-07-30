---
title: 'Quiz — Vererbung von Grammatiken'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

`Pet` erbt `TOP` von `Base`, überschreibt aber das Token `word`, sodass es `dog` trifft. Wenn `Pet` `'dog'` zerlegt, wird ihr eigenes `word` verwendet, das Zerlegen gelingt also, und `.defined` ist `True`.

</div>

{% include nav.html %}
