---
title: 'Тест — Що таке граматика'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

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

Іменований токен `greet` зіставляється з літеральним текстом `hi`. Виклик його як `<greet>` усередині шаблону шукає цей текст, а він присутній на початку `'hi there'`, тож зіставлення успішне і `so` повертає `True`.

</div>

{% include nav.html %}
