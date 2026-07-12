---
title: 'Quiz — Substitution'
---

{% include menu.html %}

What does the following program print?

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

`tr///` replaces characters one for one, and unlike `s///` it changes **every** matching character without needing `:g`. Both `l`s in `hello` become `L`, giving `heLLo`.

</div>

{% include nav.html %}
