---
title: 'Тест — Наречия'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа? Обратите внимание на наречие `:s` и на вереницу пробелов
в тексте.

```raku
say so 'hello   world' ~~ /:s hello world/;
```

{:.quiz}
1 | True
0 | False
0 | ｢hello   world｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

Наречие `:s` делает пробел между `hello` и `world` в шаблоне значимым — оно требует, чтобы там
был пробельный символ. Годятся один или несколько пробелов, поэтому вереница из трёх пробелов
в тексте подходит и результат — `True`. Без `:s` пробел в шаблоне игнорировался бы и шаблон искал
бы `helloworld`.

</div>

{% include nav.html %}
