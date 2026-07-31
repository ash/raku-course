---
title: Viktorīna — Natīvie tipi
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my int $n = 42;
say $n.^name;
```

{:.quiz}
1 | Int
0 | int
0 | (Int)
0 | Num

{% include quiz.html %}

<div class="extended-explanation">

Introspektējot natīvo vērtību, tā automātiski tiek *iesaiņota* atbilstošajā pilnajā tipā. Tāpēc, lai gan `$n` ir deklarēts kā natīvais `int`, tipa nosaukuma pieprasīšana caur `.^name` ziņo iesaiņoto `Int`.

</div>

{% include nav.html %}
