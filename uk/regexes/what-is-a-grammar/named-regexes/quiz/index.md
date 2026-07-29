---
title: 'Тест — Іменовані регекси'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

```raku
my regex letter { <[a..z]> }

'a1' ~~ / <letter> /;
say $<letter>;
```

{:.quiz}
1 | ｢a｣
0 | ｢1｣
0 | ｢a1｣
0 | ｢letter｣

{% include quiz.html %}

<div class="extended-explanation">

Виклик іменованого регексу як `<letter>` і зіставляється з ним, і захоплює результат під цим іменем. Шаблон знаходить першу малу літеру, `a`, тож `$<letter>` дорівнює `｢a｣`.

</div>

{% include nav.html %}
