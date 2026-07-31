---
title: 'Risinājums: Gads un mēnesis'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my regex year  { \d ** 4 }
my regex month { \d ** 2 }

if '2025-06' ~~ / <year> '-' <month> / {
    say $<year>;
    say $<month>;
}
```

🦋 Atrodiet programmu failā [year-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/year-token.raku).

## Izvade

```
｢2025｣
｢06｣
```

## Komentāri

1. Tiek deklarētas divas nosauktas regulārās izteiksmes, katra aprakstot vienu datuma gabalu: četru ciparu `year` un divu ciparu `month`.

1. Raksturs tās apvieno ar burtisku domuzīmi vidū, un katra tiek satverta ar savu nosaukumu. Lielāka raksturā būvēšana no maziem nosauktiem gabaliem ir tieši tā ideja, ko gramatika noformalizē.

{% include nav.html %}
