---
title: 'Quiz — Smartmatch'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus? Beachten Sie, dass diesmal kein `so` dabei ist und der Treffer die Form `m/.../` verwendet.

```raku
say 'the cat sat' ~~ m/sat/;
```

{:.quiz}
0 | True
0 | False
1 | ｢sat｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`m/sat/` trifft genauso wie `/sat/`. Ohne `so`, das es zu einem Wahrheitswert macht, liefert der Smartmatch das Match-Objekt selbst, das `say` zwischen Eckklammern als `｢sat｣` ausgibt.

</div>

{% include nav.html %}
