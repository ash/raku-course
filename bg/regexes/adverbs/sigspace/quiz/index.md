---
title: 'Тест — Наречия'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма? Забележете наречието `:s` и поредицата от интервали в текста.

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

Наречието `:s` прави интервала между `hello` и `world` в шаблона значещ — той изисква там да има празен знак. Броят се един или повече интервала, така че поредицата от три интервала в текста съвпада и резултатът е `True`. Без `:s` интервалът в шаблона би бил пренебрегнат и шаблонът би търсил `helloworld`.

</div>

{% include nav.html %}
