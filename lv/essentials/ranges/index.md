---
title: Diapazoni
---

{% include menu.html %}

Diapazoni Raku ģenerē secīgu elementu sarakstus.

Vienkāršākajā gadījumā diapazons ir pieaugošu veselu skaitļu saraksts. Lai izveidotu diapazonu, izmantojiet operatoru `..` un divas vērtības, kas nosaka diapazona minimālās un maksimālās vērtības:

```raku
1 .. 5
```

Atstarpes ap operatoru ir izvēles. Šo konstrukciju var uzrakstīt arī šādi:

```raku
1..5
```

Lai gan diapazons ir līdzeklis sarakstu ģenerēšanai, tas joprojām ir viens objekts, tāpēc to var saglabāt skalārajā mainīgajā:

```raku
my $r = 1 .. 5;
```

## Ne tikai skaitļi

Ir iespējams izveidot diapazonu no citiem datu tipiem, kurus Raku zina, kā palielināt. Piemēram:

```raku
my $letters = 'a' .. 'z';
```

Diapazoni Raku ir paši savas datu tipa objekti. Mainīgā `$r` tips ir `Range`.

{% include nav.html %}