---
title: 'Risinājums: Saķēdējiet solījumu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $p = start { 'raku' };
my $q = $p.then({ .result.uc });
my $r = $q.then({ .result ~ '!' });
say await $r;
```

🦋 Atrodiet programmu failā [promise-result.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/promise-result.raku).

## Izvade

```
RAKU!
```

## Komentāri

1. Katrs `.then` uzbūvē jaunu solījumu, kas izpildās, tiklīdz iepriekšējais ir gatavs. Tā blokā `.result` ir vērtība, ko radījis iepriekšējais solījums.

1. Pirmais turpinājums pārvērš `'raku'` par `'RAKU'`; otrais pieliek `'!'`. Sagaidot pēdējo solījumu `$r`, tiek izstaigāta visa ķēde un iegūts `'RAKU!'` — mazs konveijers, kurā katrs solis pārveido iepriekšējā soļa rezultātu.

{% include nav.html %}
