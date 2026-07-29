---
title: 'Тест — Позиційні захоплення'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

```raku
if 'ab-cd' ~~ / (\w+) '-' (\w+) / {
    say $1;
}
```

{:.quiz}
0 | ｢ab｣
1 | ｢cd｣
0 | ｢ab-cd｣
0 | ｢-｣

{% include quiz.html %}

<div class="extended-explanation">

Дві пари дужок захоплюють у `$0` та `$1`, з нумерацією від нуля. Перша захоплює `ab`, друга — `cd`, тож `$1` є `｢cd｣`.

</div>

{% include nav.html %}
