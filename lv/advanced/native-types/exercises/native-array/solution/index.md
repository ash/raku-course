---
title: 'Risinājums: Natīvais masīvs'
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my uint8 @bytes = 100, 200, 255;
say @bytes.sum;
```

🦋 Programmas pirmkodu var atrast failā [native-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/native-array.raku).

## Izvade

```
555
```

## Komentāri

1. Liekot natīvo tipu ar fiksētu izmēru `uint8` pirms `@` masīva, tiek deklarēts masīvs, kur katrs elements tiek glabāts kā viens neparakstīts baits — kompakts izkārtojums, kas piemērots binārajiem datiem.

1. Apgriešanās limits attiecas uz katru *elementu* (`0..255`), nevis uz to summēšanas rezultātu. `.sum` iesaiņo summu parastajā `Int`, tāpēc `100 + 200 + 255` dod pilno `555`.

{% include nav.html %}
