---
title: Viktorīna — Operators s///
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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

Bez apstākļvārda `:g` `s///` aizstāj tikai **pirmo** sakritību. Tāpēc par `three` kļūst tikai pirmais `two`, dodot `one three two`. Ar `s:g///` mainītos abi gadījumi.

</div>

{% include nav.html %}
