---
title: Salīdzināt skaitļus
---

{% include menu.html %}

Lai salīdzinātu divus skaitļus, izmantojiet šādus operatorus. Visi tie ir diezgan acīmredzami, ja esat pazīstams ar citām programmēšanas valodām.

`==` | Vienāds
`!=` | Nav vienāds
`<` | Mazāks par
`<=` | Mazāks vai vienāds
`>` | Lielāks par
`>=` | Lielāks vai vienāds

## Aptuveni vienāds

Papildus standarta operatoriem, Raku pievieno aptuveni vienādo operatoru `=~=`, kas salīdzina skaitļus aptuveni. Tā rezultāts ir `True`, ja abi skaitļi ir relatīvi tuvu viens otram. Maksimālā relatīvā atšķirība nedrīkst pārsniegt iebūvēto vērtību `$*TOLERANCE`, kas ir vienāda ar `1e-15`.

## Unicode versijas

Dažiem no iepriekš minētajiem operatoriem ir Unicode ekvivalenti:

`!=` | `≠`
`<=` | `≤` 
`>=` | `≥`
`=~=` | `≅`

## Piemēri

Daži piemēri ar operatoriem, kas salīdzina skaitļus:

```raku
say 10 == 10; # True
say 10 != 10; # False

say 15 < 10;  # False
say 10 <= 10; # True
say 16 > 10;  # True
say 10 >= 14; # False

say 1.000000000000000000000001 =~= 1.000000000000000000000002; # True
say 2e17 + 1 =~= 2e17 + 100; # True
```

Ņemiet vērā, ka skaitlis `1.000000000000000000000001` ir `Rat` skaitlis, tāpēc jūs nezaudējat precizitāti izteiksmē ar tuvu skaitli `1.000000000000000000000002`. Pēdējais piemērs ar `2e17` darbojas ar `Num` skaitļiem, kuriem ir ierobežota precizitāte.

{% include nav.html %}