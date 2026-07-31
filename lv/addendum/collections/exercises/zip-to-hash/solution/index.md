---
title: 'Risinājums: Savienojiet divus sarakstus jaucējtabulā'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @names  = <Anna Bob Cara>;
my @scores = 90, 85, 95;

my %result = @names Z=> @scores;

for %result.sort -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Atrodiet programmu failā [zip-to-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/zip-to-hash.raku).

## Izvade

```
Anna: 90
Bob: 85
Cara: 95
```

## Komentāri

1. `Z=>` ir rāvējslēdzēja metaoperators, piemērots pāra konstruktoram `=>`: tas soli
solī iet pa abiem sarakstiem un no katras pozīcijas uzbūvē pāri `vārds => rezultāts`.

1. Piešķirot šo pāru sarakstu `%` mainīgajam, rodas jaucējtabula, ko pēc tam
izdrukā atslēgu secībā.

{% include nav.html %}
