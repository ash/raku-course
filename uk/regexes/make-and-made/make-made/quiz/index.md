---
title: 'Тест — make і made'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

```raku
grammar G {
    token TOP    { <number> { make $<number>.Int ** 2 } }
    token number { \d+ }
}

say G.parse('5').made;
```

{:.quiz}
0 | ｢5｣
0 | 5
1 | 25
0 | 55

{% include quiz.html %}

<div class="extended-explanation">

Вбудований блок зберігає на збігу `$<number>.Int ** 2`. Токен захопив `5`; перетворення на ціле `5` і піднесення до квадрата дають `25`, і саме це повертає `made`.

</div>

{% include nav.html %}
