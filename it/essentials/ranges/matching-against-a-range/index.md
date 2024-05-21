---
title: Confronto con un intervallo
---

{% include menu.html %}

Prendi un intervallo e una variabile con un valore intero:

```raku
my $r = 1..10;
my $v = 7;
```

Usando l'_operatore di smart-match_ `~~`, puoi verificare se il valore è all'interno dell'intervallo:

```
say $v ~~ $r;
```

Nell'esempio mostrato, la condizione è `True`, quindi il programma stampa `True`.

{% include nav.html %}