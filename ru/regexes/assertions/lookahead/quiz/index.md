---
title: 'Тест — Просмотр вперёд'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
say '5 cm' ~~ / \d+ <?before ' cm'> /;
```

{:.quiz}
1 | ｢5｣
0 | ｢5 cm｣
0 | False
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

Положительный просмотр вперёд `<?before ' cm'>` требует, чтобы за цифрами следовало ` cm`, — так
оно и есть. Утверждение проверяет этот текст, но не поглощает его, поэтому совпадением остаются
только цифры: `｢5｣`.

</div>

{% include nav.html %}
