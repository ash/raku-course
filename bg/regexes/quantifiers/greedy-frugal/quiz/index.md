---
title: 'Тест — Квантификатори'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

Квантификаторът `** 2..3` позволява две или три повторения и, бидейки лаком, взема колкото може — три. Четвъртото `a` остава несъпоставено.

</div>

{% include nav.html %}
