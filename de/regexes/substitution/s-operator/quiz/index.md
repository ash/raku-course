---
title: 'Quiz — Der Operator s///'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

Ohne das Adverb `:g` ersetzt `s///` nur den **ersten** Treffer. Nur das erste `two` wird also zu `three`, was `one three two` ergibt. Mit `s:g///` würden sich beide Vorkommen ändern.

</div>

{% include nav.html %}
