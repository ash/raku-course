---
title: Quiz — El operador s///
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my $s = 'one two two';
$s ~~ s/two/three/;
say $s;
```

{:.quiz}
1 | one three two
0 | one three three
0 | one two two
0 | three two two

{% include quiz.html %}

<div class="extended-explanation">

Sin el adverbio `:g`, `s///` reemplaza solo la **primera** coincidencia. Así que solo el primer `two` pasa a ser `three`, dando `one three two`. Con `s:g///` habrían cambiado las dos apariciones.

</div>

{% include nav.html %}
