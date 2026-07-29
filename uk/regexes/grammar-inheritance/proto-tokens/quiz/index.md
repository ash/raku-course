---
title: 'Тест — Граматики та успадкування'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

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

`Pet` успадковує `TOP` від `Base`, але перевизначає токен `word` так, щоб той зіставлявся з `dog`. Коли `Pet` розбирає `'dog'`, використовується його власний `word`, тож розбір успішний і `.defined` дає `True`.

</div>

{% include nav.html %}
