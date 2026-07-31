---
title: Interi
---

{% include menu.html %}

Hai usato gli interi fin dall'inizio del corso. Questa sezione esamina alcune delle loro caratteristiche meno ovvie.

La più importante è che gli interi in Raku hanno _precisione arbitraria_: non sono limitati a un numero fisso di byte e non vanno mai in overflow silenziosamente. Finché c'è abbastanza memoria, un intero può crescere quanto serve:

```raku
say 2 ** 100;
# 1267650600228229401496703205376
```

Questo è un valore esatto, non un'approssimazione. Lo stesso vale per i prodotti di numeri grandi — il fattoriale di 50, ad esempio, viene calcolato in modo esatto:

```raku
my $factorial = 1;
$factorial = $factorial * $_ for 1..50;
say $factorial;
# 30414093201713378043612608166064768844377641568960512000000000000
```

Per rendere i numeri lunghi più facili da leggere nel codice sorgente, puoi raggruppare le cifre con degli underscore. Gli underscore vengono ignorati dal compilatore:

```raku
say 1_000_000; # 1000000
```

Gli argomenti seguenti mostrano come scrivere interi in altre basi numeriche e introducono alcuni metodi utili per gli interi.

{% include nav.html %}
