---
title: 'Тест — Грамматики и наследование'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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

`Pet` наследует `TOP` от `Base`, но переопределяет токен `word`, чтобы тот сопоставлял `dog`.
Когда `Pet` разбирает `'dog'`, используется её собственный `word`, поэтому разбор удаётся
и `.defined` даёт `True`.

</div>

{% include nav.html %}
