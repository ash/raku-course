---
title: 'Quiz — The s/// operator'
---

{% include menu.html %}

What does the following program print?

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

Without the `:g` adverb, `s///` replaces only the **first** match. So just the first `two` becomes `three`, giving `one three two`. With `s:g///` both occurrences would change.

</div>

{% include nav.html %}
