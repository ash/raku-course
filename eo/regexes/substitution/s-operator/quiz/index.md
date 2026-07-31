---
title: Kvizo — La operatoro s///
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

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

Sen la adverbo `:g`, `s///` anstataŭigas nur la **unuan** kongruon. Do nur la unua `two` fariĝas `three`, donante `one three two`. Kun `s:g///` ambaŭ aperoj ŝanĝiĝus.

</div>

{% include nav.html %}
