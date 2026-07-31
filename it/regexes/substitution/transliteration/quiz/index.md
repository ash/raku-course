---
title: Quiz — Sostituzione
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

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

`tr///` rimpiazza i caratteri uno a uno e, a differenza di `s///`, cambia **ogni** carattere corrispondente senza aver bisogno di `:g`. Entrambe le `l` di `hello` diventano `L`, dando `heLLo`.

</div>

{% include nav.html %}
