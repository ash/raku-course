---
title: 'Risinājums: Nedēļas līdz Ziemassvētkiem'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $days = Date.new(2026, 12, 25) - Date.new(2026, 6, 27);
say "{$days div 7} weeks and {$days % 7} days";
```

🦋 Atrodiet programmu failā [days-until-christmas.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/days-until-christmas.raku).

## Izvade

```
25 weeks and 6 days
```

## Komentāri

1. Atņemot vienu `Date` no otra, tiek atgriezts dienu skaits starp tiem — šeit `181` —, tāpēc katra mēneša dienas nav jāskaita ar roku. Vēlākais datums rakstīts pirmais, tāpēc rezultāts ir pozitīvs.

1. Veselā dalīšana `div` dod veselu nedēļu skaitu (`181 div 7` ir `25`), un moduļa operators `%` dod atlikušās dienas (`181 % 7` ir `6`).

{% include nav.html %}
