---
title: make un made
translations_gpt:
---

{% include menu.html %}

Tā vietā, lai vērtības rakņātu ārā no koka pēc tam, tās sakritībai var piesaistīt **parsēšanas laikā**. Marķiera ķermenī var iegult _koda bloku_ — iekšēju `{ … }`, kas uzrakstīts starp raksturā daļām — un tas izpildās, tiklīdz piemeklēšana līdz tam nonāk. Šī bloka iekšienē funkcija `make` saglabā vērtību uz pašreizējās sakritības:

```raku
grammar OneNum {
    token TOP    { <number> { make $<number>.Int } }
    token number { \d+ }
}
```

Kad `TOP` sakrīt, izpildās iekšējais bloks `{ make $<number>.Int }` — ārējās figūriekavas ir tikai marķiera ķermenis — un saglabā veselo skaitli uz sakritības. Pēc tam to nolasāt atpakaļ ar `made` (vai tā aliasu `.ast`):

```raku
say OneNum.parse('42').made; # 42
```

Tā kā saglabājām `$<number>.Int`, vērtība, ko atdod `made`, ir īsts `Int` — pats skaitlis, nevis sakritības objekts:

```raku
say OneNum.parse('42').made + 1; # 43
```

Ievērojiet, ka tieši šis `+ 1` dotu `43` arī bez `.Int`, jo aritmētikā sakritība pārvēršas par saviem cipariem. `.Int` izsaukuma jēga ir tā, ka *saglabātā* vērtība patiešām **ir** skaitlis — un tieši to jūs vēlaties, tiklīdz tā tiek turēta datu struktūrā vai padota tālāk, nevis paliek neapstrādāta sakritība.

Saglabātā vērtība var būt jebkas — skaitlis, virkne, masīvs, objekts. Marķieris var arī apvienot vērtības, ko izveidojuši tā apakšmarķieri. Piemēram, saskaitot divus satvertos skaitļus:

```raku
grammar Sum {
    token TOP { <a> '+' <b> { make $<a>.Int + $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Sum.parse('2+3').made; # 5
```

`make` un `made` ir tilts no «tas sakrita» uz «lūk, nozīme». Blokus likt uz vietas darbojas, taču tas sajauc raksturu ar loģiku; nākamā sadaļa šo loģiku pārceļ uz atsevišķu [_darbību klasi_](/lv/regexes/action-classes).

{% include nav.html %}
