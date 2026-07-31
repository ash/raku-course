---
title: 'Risinājums: Sagaidiet supply'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $sensor = Supply.from-list(18, 21, 19, 23);

my $last = await $sensor;
say "final reading: $last";
```

🦋 Atrodiet programmu failā [await-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-supply.raku).

## Izvade

```
final reading: 23
```

## Komentāri

1. Plūsmas gaidīšana bloķē, līdz straume ir izstarojusi visu, kas tai ir, — tā pati «gaidi, līdz pabeigts», ko `await` dod solījumam —, un tās vērtība ir **pēdējais**, ko plūsma izstarojusi, `23`.

1. Tas der straumei, kurā svarīgs ir tikai gala stāvoklis, piemēram, jaunākais sensora rādījums. Ja jums vajag *katru* vērtību, tas ir darbs `.tap` metodei vai `react` blokam, kā iepriekšējās sadaļās.

{% include nav.html %}
