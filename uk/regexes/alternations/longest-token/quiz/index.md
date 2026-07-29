---
title: 'Тест — Альтернативи'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма? Зверніть увагу на одинарну риску `|`.

```raku
say 'download' ~~ / down | download /;
```

{:.quiz}
1 | ｢download｣
0 | ｢down｣
0 | ｢load｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Одинарна риска `|` використовує зіставлення за найдовшим токеном: коли на одному місці збігається більш ніж одна альтернатива, перемагає найдовша. Хоча `down` записано першим і воно збіглося б, `|` віддає перевагу довшому `download`. Із `||` натомість перемогло б `down`.

</div>

{% include nav.html %}
