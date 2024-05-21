---
title: Viktorīna — Masīvu interpolācija
---

{% include menu.html %}

Ņemot vērā sekojošo masīvu:

```raku
my @arr = 10, 9, 8, 3, 2, 1;
```

Pabeidziet zemāk esošās programmas, lai iegūtu pieprasīto izvadi.

## 1

Izdrukājiet trešo elementu (elementu ar indeksu `2`).

{:.quiz-code}
[2] | say &quot;Trešais elements ir @arr␣␣&quot;;

## 2

Izdrukājiet visus elementus (neizmantojot katra elementa indeksēšanu atsevišķi).

{:.quiz-code}
arr[] | say &quot;Šis masīvs satur: @␣␣␣␣.&quot;; | Izvade ir ”Šis masīvs satur: 10 9 8 3 2 1.“

## 3

Izdrukājiet masīva lielumu (izmantojot `elems` metodi).

{:.quiz-code}
{@arr.elems} | say &quot;Masīvā ir ␣␣␣␣␣␣␣␣ elementi.&quot;; | Liekās iekavas nepieciešamas, lai ievietotu Raku kodu Raku virknē.

{% include quiz.html %}

{% include nav.html %}