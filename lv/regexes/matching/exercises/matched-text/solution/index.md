---
title: 'Risinājums: Sakritušais teksts'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
'database' ~~ /base/;
say $/.Str;
```

🦋 Atrodiet programmu failā [matched-text.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/matched-text.raku).

## Izvade

```
base
```

## Komentāri

1. Katra gudrā sakritība saglabā savu rezultātu speciālajā sakritības mainīgajā `$/`, tāpēc nav vajadzības to piešķirt savam mainīgajam.

1. Sakritības objekts satur sakritušo tekstu; izsaucot `.Str` uz `$/`, šis teksts tiek atgriezts kā parasta virkne. Izdrukājot sakritības objektu tieši, tā vietā būtu redzams `｢base｣`.

{% include nav.html %}
