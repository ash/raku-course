---
title: Quiz — Operator s///
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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

Sine adverbio `:g` `s///` solam **primam** congruentiam permutat. Itaque solum primum `two` `three` fit, dans `one three two`. Cum `s:g///` utraque occurrentia mutaretur.

</div>

{% include nav.html %}
