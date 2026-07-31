---
title: Quiz — Substitutio
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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

`tr///` litteras unam pro una permutat, et dissimilis `s///` **omnem** litteram congruentem mutat sine `:g` necessario. Utraque `l` in `hello` `L` fit, dans `heLLo`.

</div>

{% include nav.html %}
