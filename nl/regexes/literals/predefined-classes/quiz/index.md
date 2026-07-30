---
title: 'Quiz — Tekenklassen'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
say 'a_1 b' ~~ /\W/;
```

{:.quiz}
0 | ｢a｣
0 | ｢_｣
0 | ｢1｣
1 | ｢ ｣

{% include quiz.html %}

<div class="extended-explanation">

De klasse `\W` matcht het eerste teken dat **geen** letter, cijfer of underscore is. De tekens `a`, `_` en `1` zijn allemaal woordtekens, dus het eerste niet-woordteken is de spatie.

</div>

{% include nav.html %}
