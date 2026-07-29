---
title: 'Тест — Огляд уперед'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

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

Стверджувальний огляд уперед `<?before ' cm'>` вимагає, щоб за цифрами йшло ` cm`, — так воно і є. Твердження перевіряє цей текст, але не споживає його, тож збігом є лише цифри, `｢5｣`.

</div>

{% include nav.html %}
