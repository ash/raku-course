---
title: 'Тест — Какво е граматика'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

Именуваният токен `greet` съпоставя буквалния текст `hi`. Извикването му като `<greet>` вътре в шаблона търси този текст, а той присъства в началото на `'hi there'`, така че съпоставянето успява и `so` връща `True`.

</div>

{% include nav.html %}
