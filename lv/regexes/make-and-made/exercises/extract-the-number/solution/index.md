---
title: 'Risinājums: Izgūstiet skaitli'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
grammar Weight {
    token TOP    { <number> 'kg' { make $<number>.Int } }
    token number { \d+ }
}

say Weight.parse('5kg').made;
```

🦋 Atrodiet programmu failā [extract-the-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/extract-the-number.raku).

## Izvade

```
5
```

## Komentāri

1. Raksturs piemeklē ciparus un burtisko `kg`, taču iekšējais bloks saglabā tikai `$<number>.Int` — veselo skaitli bez vienības.

1. `made` šo vērtību nolasa atpakaļ: īstu `5`, ar ko gatavs rēķināt, nevis tekstu `5kg`. Šis ir tipiskais `make` uzdevums — pārvērst sakritību tīrā vērtībā, kāda jums patiešām vajadzīga.

{% include nav.html %}
