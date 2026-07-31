---
title: Compatatio contra intervallum
---

{% include menu.html %}

Cape spatium et variabile cum valore integri in eo:

```raku
my $r = 1..10;
my $v = 7;
```

Utens _operatorio callido-comparationis_ `~~`, potes inspicere si valor intra spatium est:

```
dic $v ~~ $r;
```

In exemplo demonstrato, condicio est `True`, itaque programma imprimit `True`.

{% include nav.html %}