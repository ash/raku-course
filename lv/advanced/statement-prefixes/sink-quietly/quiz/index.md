---
title: Viktorīna — Priekšrakstu prefiksi
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my $v;
quietly {
    say $v + 10;
}
```

{:.quiz}
0 | Brīdinājumu, tad 10
1 | 10
0 | Nil
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Pieskaitot `10` nedefinētajam `$v`, tas tiek uztverts kā `0`, dodot `10`. Parasti tiktu izdrukāts arī brīdinājums par neinicializētu vērtību, taču prefikss `quietly` to apslāpē, tāpēc tiek izdrukāts tikai `10`.

</div>

{% include nav.html %}
