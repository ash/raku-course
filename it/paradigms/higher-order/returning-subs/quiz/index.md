---
title: Quiz — Funzioni di ordine superiore
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
sub prefixer($p) {
    sub ($s) { $p ~ $s };
}

my &hi = prefixer('Hi, ');
say hi('Bob');
```

{:.quiz}
1 | Hi, Bob
0 | Bob
0 | Hi, 
0 | Hi, Hi, 

{% include quiz.html %}

<div class="extended-explanation">

`prefixer('Hi, ')` restituisce una subroutine che ricorda il prefisso e lo antepone a qualunque cosa le venga data. Conservata in `&hi` e chiamata con `'Bob'`, restituisce `Hi, Bob` — una subroutine restituita funziona con le stringhe altrettanto bene che con i numeri.

</div>

{% include nav.html %}
