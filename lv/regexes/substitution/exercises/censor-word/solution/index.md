---
title: 'Risinājums: Cenzējiet vārdu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $s = 'secret secret plan';
$s ~~ s:g/secret/***/;
say $s;
```

🦋 Atrodiet programmu failā [censor-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/censor-word.raku).

## Izvade

```
*** *** plan
```

## Komentāri

1. Operators `s///` aizstāj sakritušo `secret` ar burtisko tekstu `***`, kas uzrakstīts bez pēdiņām, un maina `$s` uz vietas.

1. Apstākļvārds `:g` ir tas, kas liek aizstāt **abus** gadījumus. Bez tā tiktu cenzēts tikai pirmais `secret`.

{% include nav.html %}
