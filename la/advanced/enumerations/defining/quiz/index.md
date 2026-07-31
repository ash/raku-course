---
title: Quiz — Enumerationes
translations_gpt:
---

{% include menu.html %}

Quid sequens programma imprimit?

```raku
enum Colour <red green blue>;
say green + blue;
```

{:.quiz}
1 | 3
0 | greenblue
0 | (green blue)
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

Unaquaeque constans numerum significat, ab zero assignatum ordine enumerato: `red` est `0`, `green` est `1`, `blue` est `2`. In contextu arithmetico constantes ut illi numeri agunt, itaque `green + blue` est `1 + 2`, quod est `3`.

</div>

{% include nav.html %}
