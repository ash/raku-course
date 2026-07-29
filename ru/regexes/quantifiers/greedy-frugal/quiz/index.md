---
title: 'Тест — Квантификаторы'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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

Квантификатор `** 2..3` допускает два или три повторения и, будучи жадным, берёт столько, сколько
может, — три. Четвёртая `a` остаётся вне совпадения.

</div>

{% include nav.html %}
