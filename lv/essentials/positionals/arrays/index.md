---
title: Masīvi
---

{% include menu.html %}

Masīvi ir agregātu datu tipi, kas var saturēt vairāk nekā vienu vērtību. Tas atšķir masīvus no [skalārajiem elementiem](/lv/essentials/scalar-variables). Masīva elementus var indeksēt (vai _apzīmēt ar apakšindeksiem_). Citiem vārdiem sakot, tā elementiem ir pozīcija (kas izskaidro vispārējo nosaukumu šāda veida datiem: pozicionālie dati).

Masīva mainīgajiem tiek izmantots cits sigils: `@`. Noteikumi mainīgā nosaukumam ir tādi paši kā [skalārajiem mainīgajiem](/lv/essentials/scalar-variables/identifiers/).

```raku
my @cities;
```

Līdz šim ir izveidots masīvs ar nosaukumu `@cities`. Jūs varat to aizpildīt ar dažām vērtībām:

```raku
@cities = 'Parīze', 'Roma', 'Berlīne';
```

Alternatīvi, ir iespējams uzreiz inicializēt vērtības:

```raku
my @cities = 'Parīze', 'Roma', 'Berlīne';
```

## Indeksēšana

Lai piekļūtu vienam masīva elementam, izmantojiet pāri iekavu, kuras novietojat pēc mainīgā nosaukuma:

```raku
say @cities[1];
```

Pamaniet, ka sigils vienmēr paliek nemainīgs. Tā kā elementi tiek skaitīti no nulles, elements `@cities[1]` mūsu piemērā ir `'Roma'`.

Masīvi ir maināmi, tāpēc jūs varat viegli modificēt to elementus, vienkārši piešķirot tiem jaunu vērtību:

```raku
@cities[0] = 'Roma';
@cities[1] = 'Parīze';
```

Pēc tam izteiksme `say @cities[1]` izdrukās jauno vērtību `'Parīze'`.

## Izmērs

Lai iegūtu pašreizējo masīva garumu, vai, citiem vārdiem sakot, tā elementu skaitu, izmantojiet metodi `elems`:

```raku
say @cities.elems; # 3
```

Ja masīvs parādās kontekstā, kur gaidāms skaitlisks parametrs, atgrieztā vērtība ir masīva izmērs:

```raku
say +@cities; # 3
```

Šeit, [`+` prefiksa operators](/lv/essentials/coercion/prefixes) pieprasa skaitlisku vērtību no tā argumenta, tāpēc `+@cities` rezultāts ir `3`.

{% include nav.html %}