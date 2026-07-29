---
title: 'Тест — Граматики и наследяване'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

`Pet` наследява `TOP` от `Base`, но предефинира токена `word`, за да съпоставя `dog`. Когато `Pet` разбира `'dog'`, се използва собственият му `word`, така че разборът успява и `.defined` дава `True`.

</div>

{% include nav.html %}
