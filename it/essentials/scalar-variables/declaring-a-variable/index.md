---
title: Variabili scalari
---

{% include menu.html %}

Le variabili devono essere dichiarate prima di essere utilizzate. Raku ha dei _dichiaratori_ speciali per questo. Per dichiarare una variabile, usa `my` come mostrato di seguito:

```raku
my $name;
```

Detto ciò, hai introdotto una nuova variabile, che finora non contiene alcun valore. Ma è già conosciuta dal compilatore, che la identificherà quando vedrà lo stesso nome più avanti nel programma.

## Più di una variabile

Puoi dichiarare due o più variabili usando lo stesso dichiaratore `my`:

```raku
my ($x, $y);
```

{% include nav.html %}