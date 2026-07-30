---
title: 'Quiz — Substitutie'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
my $s = 'hello';
$s ~~ tr/l/L/;
say $s;
```

{:.quiz}
0 | hello
0 | heLo
1 | heLLo
0 | LLLLL

{% include quiz.html %}

<div class="extended-explanation">

`tr///` vervangt tekens een voor een, en anders dan `s///` verandert hij **elk** matchend teken zonder dat `:g` nodig is. Beide `l`'s in `hello` worden `L`, wat `heLLo` oplevert.

</div>

{% include nav.html %}
