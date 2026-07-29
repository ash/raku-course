---
title: 'Тест — Именованные регулярные выражения'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
my regex letter { <[a..z]> }

'a1' ~~ / <letter> /;
say $<letter>;
```

{:.quiz}
1 | ｢a｣
0 | ｢1｣
0 | ｢a1｣
0 | ｢letter｣

{% include quiz.html %}

<div class="extended-explanation">

Вызов именованного регулярного выражения как `<letter>` и сопоставляет его, и захватывает
результат под тем же именем. Шаблон находит первую строчную букву, `a`, поэтому `$<letter>`
равно `｢a｣`.

</div>

{% include nav.html %}
