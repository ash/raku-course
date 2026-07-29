---
title: 'Тест — Алтернативи'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма? Забележете единичната черта `|`.

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

Единичната черта `|` използва съпоставяне по най-дълъг токен: когато повече от една възможност съвпада на едно и също място, печели най-дългата. Макар `down` да е написано първо и да би съвпаднало, `|` предпочита по-дългото `download`. С `||` вместо това би спечелило `down`.

</div>

{% include nav.html %}
