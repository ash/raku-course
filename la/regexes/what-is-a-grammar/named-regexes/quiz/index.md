---
title: Quiz — Expressiones regulares nominatae
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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

Expressionem regularem nominatam ut `<letter>` vocans et eam congruis et effectum sub illo nomine capis. Exemplar primam litteram minusculam invenit, `a`, itaque `$<letter>` est `｢a｣`.

</div>

{% include nav.html %}
