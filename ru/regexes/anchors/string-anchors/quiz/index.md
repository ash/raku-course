---
title: 'Тест — Якоря строки'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа? Обратите внимание на `$` в конце шаблона.

```raku
say so 'hello world' ~~ / world $/;
```

{:.quiz}
1 | True
0 | False
0 | ｢world｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

Якорь `$` требует, чтобы совпадение заканчивалось в самом конце строки. Строка `hello world`
действительно заканчивается на `world`, поэтому привязанный шаблон срабатывает и `so` возвращает
`True`.

</div>

{% include nav.html %}
