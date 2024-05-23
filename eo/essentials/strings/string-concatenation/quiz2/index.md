---
title: 'Kvizo 1: Kunigi ĉenojn kaj nombrojn'
---

{% include menu.html %}

Raku aŭtomate konvertas numeron se vi volas kunigi ĝin al ĉeno. En ĉiu el la sekvaj partoj, elektu la liniojn kiuj presas la postulatan ĉenon.

## 1

Kiuj el la linioj presas `Alpha2`?

{:.quiz}
1 | say 'Alpha2';
0 | say 'Alpha' 2; | Spaco estas sintaksa eraro ĉi tie.
1 | say 'Alpha', '2'; | Ne estas ĉenkunigo, sed la rezulto estas ĝusta.
1 | say 'Alpha' ~ '2';
1 | say 'Alpha' ~ 2; | Nombro estas konvertita al ĉeno kaj poste kunigita.
0 | say 'Alpha' + 2; | `+` ne faras ĉenkunigon.
0 | say 'Alpha' . 2; | Nek faras `.`.

## 2

Kiuj el ĉi tiuj linioj presas `123`?

{:.quiz}
1 | say 1 ~ 2 ~ 3; | Ĉenkunigo ĉi tie, eĉ por nombroj.
0 | say 1 + 2 + 3; | Regula aritmetika esprimo.
1 | say '1' ~ '2' ~ '3'; | Unuopaj karakteroj estas ankaŭ ĉenoj.
0 | say '1' + '2' + '3'; | Ĉar estas `+`, la ĉenoj estas konvertitaj al nombroj.
1 | say 1 ~ 23;
1 | say 12 ~ 3;
1 | say 123 ~ ''; | `''` estas malplena ĉeno, do aldoni ĝin ne ŝanĝas la rezulton.

{% include quiz.html %}

{% include nav.html %}