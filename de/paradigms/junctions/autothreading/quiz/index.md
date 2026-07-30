---
title: 'Quiz — Autothreading'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my $j = 1 | 2 | 3;
say $j * 2;
```

{:.quiz}
0 | 12
0 | 6
1 | any(2, 4, 6)
0 | any(1, 2, 3)

{% include quiz.html %}

<div class="extended-explanation">

Eine Junction zu multiplizieren betreibt Autothreading: `* 2` wird auf jeden Wert hinter der Junction angewandt, was eine neue `any`-Junction `any(2, 4, 6)` ergibt.

</div>

{% include nav.html %}
