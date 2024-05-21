---
title: Escludere gli estremi di un intervallo
---

{% include menu.html %}

Per escludere uno dei bordi o entrambi, modifica l'operatore di creazione dell'intervallo con il carattere `^`. Ci sono altri tre operatori che possono essere costruiti in questo modo. I commenti elencano i numeri che gli intervalli generano.

```raku
1 ..^ 5;  # 1, 2, 3, 4
1 ^.. 5;  #    2, 3, 4, 5
1 ^..^ 5; #    2, 3, 4
```

In casi semplici come mostrato sopra, puoi omettere gli spazi intorno all'operatore di intervallo:

```raku
my $r1 = 1..5;
my $r2 = 1..^5;
```

Per un intervallo che inizia con 0, come `0..^5`, esiste una sintassi abbreviata: `^5`.

{% include nav.html %}