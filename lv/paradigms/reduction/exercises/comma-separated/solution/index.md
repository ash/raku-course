---
title: 'Risinājums: Ar komatiem atdalīts saraksts'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @words = 'Raku', 'is', 'fun';

say @words.reduce(-> $a, $b { "$a, $b" });
```

🦋 Atrodiet programmu failā [comma-separated.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/comma-separated.raku).

## Izvade

```
Raku, is, fun
```

## Komentāri

1. Šeit bloks vērtību **būvē**, nevis izvēlas: `$a` ir līdz šim saliktā virkne un `$b` ir nākamais vārds, un `"$a, $b"` tos salīmē ar komatu un atstarpi.

1. Pirmais izsaukums savieno `'Raku'` un `'is'` par `Raku, is`; otrais savieno to ar `'fun'`, dodot `Raku, is, fun`. Tieši šādu atdalītāju ņemošu savienošanu metaoperators `[~]` pats par sevi nespēj izteikt.

1. Īstā kodā jūs ņemtu iebūvēto metodi `join`, kas dara tieši to pašu — `say @words.join(', ');` izdrukā to pašu `Raku, is, fun`. Vingrinājuma jēga ir pavingrināties šo pašu domu izteikt ar `reduce` bloku.

{% include nav.html %}
