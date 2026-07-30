---
title: Quiz — Pointy blocks
translations_gpt: 'Quiz — Pointy blocks'
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
(-> $a, $b { $a * $b })(3, 4).say
```

{:.quiz}
1 | 12
0 | 7
0 | 34
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

Een pointy block kan meerdere parameters hebben: `-> $a, $b` accepteert er twee. Hier wordt het helemaal niet in een variabele opgeslagen -- het wordt tussen haakjes gezet en direct aangeroepen met `(3, 4)`, waarbij `$a` wordt gebonden aan `3` en `$b` aan `4`. Het blok vermenigvuldigt ze om `12` te geven, en de postfix `.say` drukt het af.

</div>

{% include nav.html %}
