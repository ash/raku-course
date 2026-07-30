---
title: 'Quiz — De operator s///'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

Zonder het bijwoord `:g` vervangt `s///` alleen de **eerste** match. Dus alleen de eerste `two` wordt `three`, wat `one three two` oplevert. Met `s:g///` zouden beide voorkomens veranderen.

</div>

{% include nav.html %}
