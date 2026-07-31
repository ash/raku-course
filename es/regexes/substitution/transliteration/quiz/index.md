---
title: Quiz — Sustitución
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

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

`tr///` reemplaza caracteres uno por uno y, a diferencia de `s///`, cambia **todos** los caracteres coincidentes sin necesitar `:g`. Las dos `l` de `hello` pasan a ser `L`, dando `heLLo`.

</div>

{% include nav.html %}
