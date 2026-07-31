---
title: 'Risinājums: Sagaidiet vairākus'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @words = <apple pear plum>;
my @jobs = @words.map(-> $w { start { $w.uc } });
say await @jobs;
```

🦋 Atrodiet programmu failā [await-many.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/await-many.raku).

## Izvade

```
(APPLE PEAR PLUM)
```

## Komentāri

1. `@words.map(-> $w { start { $w.uc } })` pārvērš katru vārdu par savu solījumu, tāpēc visi trīs vienlaikus tiek pārvērsti lielajos burtos. Bultiņas bloks vārdu nosauc par `$w`, tāpēc katrs solījums satver īsto.

1. `await @jobs` sagaida visu sarakstu un atdod rezultātus to sākotnējā secībā, dodot `(APPLE PEAR PLUM)`.

{% include nav.html %}
