---
title: Quiz — Pacchetti
translations_gpt: true
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
module M {
    my $x = 5;
}

say $M::x.defined;
```

{:.quiz}
1 | False
0 | True
0 | 5
0 | An error

{% include quiz.html %}

<div class="extended-explanation">

`$x` è dichiarata con `my`, quindi è lessicale e non entra mai nel namespace `M`. Il percorso `$M::x` quindi non trova nulla — un valore indefinito — e `.defined` restituisce `False`. Solo una variabile `our` sarebbe raggiungibile in questo modo.

</div>

{% include nav.html %}
