---
title: 'Тест — Поглед напред'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

Положителният поглед напред `<?before ' cm'>` изисква след цифрите да следва ` cm`, което е така. Твърдението проверява този текст, но не го поглъща, така че съвпадението е само цифрите — `｢5｣`.

</div>

{% include nav.html %}
