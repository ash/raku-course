---
title: 'Risinājums: Apgriešanās'
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my uint8 $u = 250;
$u += 10;
say $u;

my uint8 $v = 0;
$v--;
say $v;
```

🦋 Programmas pirmkodu var atrast failā [wrap-around.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/wrap-around.raku).

## Izvade

```
4
255
```

## Komentāri

1. `uint8` diapazons ir no `0` līdz `255`, kas ir 256 atšķirīgas vērtības. Aritmētika ar to faktiski tiek veikta pēc moduļa 256.

1. `250 + 10` būtu `260`, kas neietilpst. Tas apgriežas, nonākot `260 - 256 = 4` aiz apakšējās robežas. Tātad pārplūšana neaprobežojas tikai ar pārkāpšanu par vienu — jebkurš rezultāts ārpus diapazona tiek salocīts atpakaļ.

1. Otrā virzienā arī notiek pārplūšana: samazinot `0`, neparakstītajā tipā nevar iegūt `-1`, tāpēc tas apgriežas uz maksimālo vērtību, `255`.

{% include nav.html %}
