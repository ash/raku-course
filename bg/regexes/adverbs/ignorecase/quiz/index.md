---
title: 'Тест — Ignorecase'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма? Шаблонът е с главни букви, а текстът е със смесен регистър.

```raku
say 'Hello' ~~ /:i HELLO/;
```

{:.quiz}
1 | ｢Hello｣
0 | ｢HELLO｣
0 | True
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Наречието `:i` изключва различаването между главни и малки букви и работи в двете посоки — тук шаблонът с главни букви `HELLO` съвпада с текста със смесен регистър. Резултатът е намереният текст във вида, в който стои в низа: `｢Hello｣`.

</div>

{% include nav.html %}
