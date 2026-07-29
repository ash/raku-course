---
title: 'Тест — Якорі рядка'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма? Зверніть увагу на `$` у кінці шаблону.

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

Якір `$` вимагає, щоб збіг завершувався в самому кінці рядка. Рядок `hello world` справді закінчується на `world`, тож заякорений шаблон вдається, і `so` повертає `True`.

</div>

{% include nav.html %}
