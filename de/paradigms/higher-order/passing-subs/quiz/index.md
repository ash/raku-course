---
title: 'Quiz — Subroutinen übergeben'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
sub negate($n) { -$n }

sub apply(&f, $x) {
    f($x);
}

say apply(&negate, 7);
```

{:.quiz}
1 | -7
0 | 7
0 | 0
0 | &negate

{% include quiz.html %}

<div class="extended-explanation">

Eine benannte Subroutine wird mit der Sigil `&` übergeben, `&negate` überreicht `apply` also die Subroutine selbst, statt sie aufzurufen. Drinnen führt `f(7)` sie aus, was `-7` ergibt.

</div>

{% include nav.html %}
