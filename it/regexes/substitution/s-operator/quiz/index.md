---
title: "Quiz — L'operatore s///"
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

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

Senza l'avverbio `:g`, `s///` rimpiazza solo la **prima** corrispondenza. Quindi solo il primo `two` diventa `three`, dando `one three two`. Con `s:g///` sarebbero cambiate entrambe le occorrenze.

</div>

{% include nav.html %}
