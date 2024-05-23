---
title: Exercitatio ‘Tabula emptionis‘
---

{% include menu.html %}

## Problema

Crea programma ut tabulam pretii in sequenti forma imprimat. Quaeso utere variabilibus ad pretia et summa conservanda.

    Item    Pretium  N      Summa
    Sellae  $20.57   4      $82.28
    Mensae  $50.18   1      $50.18

N.B. Si non es contentus cum electione monetae, libere utere alia, sed noli oblivisci quod `$` [specialem significationem habet](/la/essentials/strings/escaping-special-characters) in Raku stringis, ideo electa est ut melius Raku discatur.

## Exemplum

Hoc programma nullum input accipit, itaque tabulam supra scriptam imprimit cum curris.

```console
$ raku purchase-table.raku
```

## Solutio

✅ [Vide solutionem](solution)

{% include nav.html %}