---
title: Comparando numeri
---

{% include menu.html %}

Ad comparandum duos numeros, utere sequentibus operatoribus. Omnes sunt satis manifesti si alias linguas programmandi noveris.

`==` | Aequalis
`!=` | Non aequalis
`<` | Minor quam
`<=` | Minor aut aequalis
`>` | Maior quam
`>=` | Maior aut aequalis

## Fere-aequalis

Praeter standardos operatores, Raku addit operatorem fere-aequalem `=~=`, qui numeros fere comparat. Eius eventus est `True` si duo numeri relative proximi sunt. Maxima differentia relativa non debet excedere valorem inbuilt `$*TOLERANCE`, qui est aequalis `1e-15`.

## Versiones Unicode

Quidam ex supra operatoribus habent aequivalentes Unicode:

`!=` | `≠`
`<=` | `≤` 
`>=` | `≥`
`=~=` | `≅`

## Exempla

Quaedam exempla cum operatoribus qui numeros comparant:

```raku
say 10 == 10; # Verum
say 10 != 10; # Falsum

say 15 < 10;  # Falsum
say 10 <= 10; # Verum
say 16 > 10;  # Verum
say 10 >= 14; # Falsum

say 1.000000000000000000000001 =~= 1.000000000000000000000002; # Verum
say 2e17 + 1 =~= 2e17 + 100; # Verum
```

Nota numerum `1.000000000000000000000001` esse numerum `Rat`, ita non amittis praecisionem in expressione cum numero proximo `1.000000000000000000000002`. Ultimum exemplum cum `2e17` operatur cum numeris `Num`, qui habent praecisionem restrictam.

{% include nav.html %}