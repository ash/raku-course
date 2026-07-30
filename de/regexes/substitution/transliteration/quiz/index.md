---
title: 'Quiz — Ersetzung'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

`tr///` ersetzt Zeichen eins zu eins und ändert, anders als `s///`, **jedes** passende Zeichen, ohne dass `:g` nötig wäre. Beide `l` in `hello` werden zu `L`, was `heLLo` ergibt.

</div>

{% include nav.html %}
