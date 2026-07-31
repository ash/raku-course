---
title: 'Risinājums: Tikai veseli skaitļi'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my Int $cars;

$cars = 250.7.Int;
say $cars;
say $cars.WHAT;
```

🦋 Atrodiet programmu failā [integers-only.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/integers-only.raku).

## Izvade

```
250
(Int)
```

## Komentāri

1. Tipa ierobežojums `Int` deklarācijā `my Int $cars` liek konteineram noraidīt jebkuru vērtību, kas nav vesels skaitlis. Tiešs `250.7` (`Rat`) piešķīrums būtu kompilēšanas laika kļūda.

1. Izsaucot `.Int` racionālajai vērtībai `250.7`, tā tiek pārveidota par veselu skaitli `250`, atmetot daļskaitļa daļu. Pārveidotā vērtība konteineram der. Neaijauciet šo uzvedību ar noapaļošanu.

1. Pseidometode `.WHAT` apstiprina, ka konteinerā ierakstītā vērtība ir tipa `Int`.

{% include nav.html %}
