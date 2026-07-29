---
title: 'Тест — Визначення оператора'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

```raku
sub infix:<times>($a, $b) { $a * $b }

say 6 times 7;
```

{:.quiz}
1 | 42
0 | 67
0 | times
0 | помилку

{% include quiz.html %}

<div class="extended-explanation">

`infix:<times>` визначає новий оператор, який записують між двома операндами. Його тіло їх перемножує, тож `6 times 7` обчислюється в `42`: оператор — це просто підпрограма з особливим іменем.

</div>

{% include nav.html %}
