---
title: 'Тест — Что такое грамматика'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
my token greet { 'hi' }

say so 'hi there' ~~ / <greet> /;
```

{:.quiz}
1 | True
0 | False
0 | ｢greet｣
0 | hi

{% include quiz.html %}

<div class="extended-explanation">

Именованный токен `greet` соответствует буквальному тексту `hi`. Вызов его как `<greet>` внутри
шаблона ищет этот текст, который есть в начале `'hi there'`, поэтому сопоставление удаётся
и `so` возвращает `True`.

</div>

{% include nav.html %}
