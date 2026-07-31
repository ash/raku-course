---
title: Quiz — Emparejamiento
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my $m = 'abcdef' ~~ /cd/;
say $m.from;
```

{:.quiz}
0 | ｢cd｣
1 | 2
0 | 3
0 | 4

{% include quiz.html %}

<div class="extended-explanation">

La coincidencia `cd` empieza en el índice `2` (los caracteres se numeran `a`=0, `b`=1, `c`=2). El método `.from` devuelve esa posición inicial, no el texto coincidente.

</div>

{% include nav.html %}
