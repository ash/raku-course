---
title: 'Тест — Квантифікатори'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

```raku
say 'aaaa' ~~ / a ** 2..3 /;
```

{:.quiz}
0 | ｢aa｣
1 | ｢aaa｣
0 | ｢aaaa｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Квантифікатор `** 2..3` дозволяє два або три повторення і, будучи жадібним, бере стільки, скільки може, — три. Четверта `a` лишається незіставленою.

</div>

{% include nav.html %}
