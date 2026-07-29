---
title: 'Тест — Именувани регулярни изрази'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

Извикването на именуван регулярен израз като `<letter>` и го съпоставя, и прихваща резултата под това име. Шаблонът намира първата малка буква — `a`, — така че `$<letter>` е `｢a｣`.

</div>

{% include nav.html %}
