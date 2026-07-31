---
title: Quiz — Parametra absorptiva
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
sub f($first, *@rest) {
    say @rest.elems;
}

f('a', 'b', 'c');
```

{:.quiz}
1 | 2
0 | 3
0 | 1
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Parametri fixi ante sorbentem implentur. `$first` capit `'a'`, et sola duo argumenta reliqua `'b'` et `'c'` in `@rest` eunt, itaque eius `.elems` est `2`.

</div>

{% include nav.html %}
