---
title: '"for" loop'
---

{% include menu.html %}

`for` cikls ir spēcīgs rīks, lai iterētu pār vairākiem elementiem. Piemēram, ņemsim diapazonu:

```raku
for 1..5 -> $n {
    say $n;
}
```

Šajā programmā mainīgais `$n` katrā iterācijā iegūst nākamo vērtību no diapazona. Ņemiet vērā, ka jums nav nepieciešams mainīgo deklarēt ar `my` tieši. Koda bloks tiek atkārtots tik reižu, cik elementu ir datu avotā. Tādējādi programma izdrukā skaitļus pa vienam rindā:

```console
$ raku t.raku 
1
2
3
4
5
```

Programma iterē pār visām vērtībām, ko ģenerē [diapazons](/lv/essentials/ranges) `1..5`. Šīs vērtības ir `1`, `2`, `3`, `4` un `5`.

## Vairāk nekā vienas vērtības ņemšana

Interesanta Raku īpašība ir tā, ka vienā iterācijā varat ņemt vairāk nekā vienu vienumu. Šāda programma izdrukā divus skaitļus ciklā:

```raku
for 1..6 -> $n, $m {
    say "$n and $m";
}
```

Šīs programmas izvade ir šāda:

```console
$ raku t.raku
1 and 2
3 and 4
5 and 6
```

{% include nav.html %}