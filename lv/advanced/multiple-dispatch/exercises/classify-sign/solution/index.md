---
title: 'Risinājums: Klasificēt izmēru'
translations_gpt:
---

{% include menu.html %}

Šeit ir viens no iespējamiem uzdevuma atrisinājumiem.

## Kods

```raku
multi sub size(Int $n where $n.abs < 10)  { 'small' }
multi sub size(Int $n where $n.abs < 100) { 'medium' }
multi sub size(Int $n)                    { 'large' }

say size(7);
say size(30);
say size(-250);
```

🦋 Šīs programmas pirmkodu var atrast failā [classify-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/classify-sign.raku).

## Izvade

```
small
medium
large
```

## Komentāri

1. Visiem trim kandidātiem ir viens `Int` parametrs, tāpēc bez `where` klauzulām tie konfliktētu. Nosacījumi pirmajos divos padara tos atšķirīgus, un trešais ir universālais variants.

1. `where` klauzulas pārbauda `$n.abs`, tāpēc rezultātu nosaka tikai absolūtā vērtība un zīme tiek ignorēta. `size(7)` atbilst pirmajam kandidātam (`small`), savukārt `size(-250)` absolūtā vērtība ir `250`, kas neatbilst nevienam nosacījumam un nonāk pie universālā varianta (`large`).

1. Kandidāti tiek pārbaudīti no specifiskākā uz vispārīgāko — tieši tādā secībā, kādā tie šeit ir uzrakstīti.

{% include nav.html %}
