---
title: 'Quiz — Grammar inheritance'
---

{% include menu.html %}

What does the following program print?

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

`Pet` inherits `TOP` from `Base` but overrides the `word` token to match `dog`. When `Pet` parses `'dog'`, its own `word` is used, so the parse succeeds and `.defined` is `True`.

</div>

{% include nav.html %}
