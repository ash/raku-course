---
title: Quiz — Parametri slurpy
---

{% include menu.html %}

Cosa stampa il seguente programma?

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

I parametri fissi vengono riempiti prima di quello slurpy. `$first` prende `'a'`, e solo i due argomenti rimanenti `'b'` e `'c'` finiscono in `@rest`, quindi il suo `.elems` è `2`.

</div>

{% include nav.html %}
