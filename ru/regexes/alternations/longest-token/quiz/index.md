---
title: 'Тест — Альтернативы'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа? Обратите внимание на одинарную черту `|`.

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

Одинарная черта `|` использует сопоставление по самому длинному токену: когда в одном месте
подходят несколько вариантов, побеждает самый длинный. Хотя `down` записан первым и подошёл бы,
`|` предпочитает более длинное `download`. С `||` победил бы `down`.

</div>

{% include nav.html %}
