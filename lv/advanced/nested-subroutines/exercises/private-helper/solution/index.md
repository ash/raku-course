---
title: 'Risinājums: Privāts palīgs'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub stats {
    sub double($x) { $x * 2 }

    say double(3) + double(5);
}

stats;
```

🦋 Atrodiet programmu failā [private-helper.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/private-helper.raku).

## Izvade

```
16
```

## Komentāri

1. Palīgs `double` ir definēts iekšpus `stats`, tāpēc tas ir redzams tikai tur un no citām programmas vietām nav izsaucams.

1. `stats` to izmanto divreiz: `double(3)` ir `6` un `double(5)` ir `10`, un to summa ir `16`.

{% include nav.html %}
