---
title: Heredoc
---

{% include menu.html %}

## Problēma

Izmantojot *interpolējošu* heredoc, izveidojiet pasūtījuma apstiprinājuma vēstuli no dažiem mainīgajiem — klienta `$name`, prece `$item`, vienības `$price` un daudzums `$count`. Heredoc jāinterpolē mainīgie *un* jāaprēķina summa tieši iekšpusē ar iegultu `{ … }` bloku (`$count * $price`).

Atkāpiet heredoc pamattekstu, lai tas atbilstu apkārtējam kodam, un novietojiet aizverošo terminatoru līdzinājumā ar tekstu, lai atkāpe neparādītos izvadē. Izdrukājiet rezultātu.

## Piemērs

Ar `$name = 'Anna'`, `$item = 'Raku Book'`, `$price = 25` un `$count = 3`, programma izdrukā bez vadošajām atstarpēm:

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
