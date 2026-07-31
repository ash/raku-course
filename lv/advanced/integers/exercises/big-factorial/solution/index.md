---
title: 'Risinājums: Cik ciparu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say (2 ** 1000).chars;
```

🦋 Programmas pirmkodu var atrast failā [big-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/big-factorial.raku).

## Izvade

```
302
```

## Komentāri

1. `2 ** 1000` tiek aprēķināts precīzi: Raku to nenoapaļo un neveido pārplūšanu, jo veseliem skaitļiem ir patvaļīga precizitāte.

1. `chars` parasti ir virkņu metode, bet, izsaucot to uz vesela skaitļa, skaitlis vispirms tiek pārveidots par decimālo tekstu un tad tiek saskaitītas rakstzīmes. Tā kā šeit nav ne mīnusa zīmes, ne decimālā punkta, rakstzīmju skaits ir tieši ciparu skaits — `302`.

{% include nav.html %}
