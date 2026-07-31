---
title: 'Risinājums: Saskaitīt un summēt'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
enum Coin (penny => 1, nickel => 5, dime => 10, quarter => 25);

say Coin.enums.elems;
say Coin.enums.values.sum;
```

🦋 Atrodiet programmu failā [enum-introspection.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/enum-introspection.raku).

## Izvade

```
4
41
```

## Komentāri

1. Konstantes ir definētas kā pāri, tāpēc katra iegūst mūsu izvēlēto vērtību, nevis automātisko numerāciju no nulles.

1. `.enums` atgriež attēlojumu no katras konstantes nosaukuma uz tās vērtību. `.elems` saskaita ierakstus — monētu ir četras.

1. `.values` izvelk tikai skaitļus, kas stāv aiz nosaukumiem, un `.sum` tos saskaita: `1 + 5 + 10 + 25` ir `41`.

{% include nav.html %}
