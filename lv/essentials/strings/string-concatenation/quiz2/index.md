---
title: '1. viktorīna: virkņu un skaitļu savienošana'
---

{% include menu.html %}

Raku automātiski pārveido skaitli, ja vēlaties to savienot ar virkni. Katrā no zemāk esošajām daļām izvēlieties rindas, kas izdrukā nepieciešamo virkni.

## 1

Kuras no rindām izdrukā `Alpha2`?

{:.quiz}
1 | say 'Alpha2';
0 | say 'Alpha' 2; | Šeit atstarpe ir sintakses kļūda.
1 | say 'Alpha', '2'; | Šeit nav virkņu savienošanas, bet rezultāts ir pareizs.
1 | say 'Alpha' ~ '2';
1 | say 'Alpha' ~ 2; | Skaitlis tiek pārveidots par virkni un pēc tam savienots.
0 | say 'Alpha' + 2; | `+` neveic virkņu savienošanu.
0 | say 'Alpha' . 2; | Arī `.` neveic virkņu savienošanu.

## 2

Kuras no šīm rindām izdrukā `123`?

{:.quiz}
1 | say 1 ~ 2 ~ 3; | Šeit notiek virkņu savienošana, pat skaitļiem.
0 | say 1 + 2 + 3; | Parasta aritmētiska izteiksme.
1 | say '1' ~ '2' ~ '3'; | Viena rakstzīme arī ir virkne.
0 | say '1' + '2' + '3'; | Tā kā ir `+`, virknes tiek pārveidotas par skaitļiem.
1 | say 1 ~ 23;
1 | say 12 ~ 3;
1 | say 123 ~ ''; | `''` ir tukša virkne, tāpēc tās pievienošana nemaina rezultātu.

{% include quiz.html %}

{% include nav.html %}