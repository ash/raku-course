---
title: 'Risinājums: Turēts vai lauzts'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $p = start { 10 };
await $p;
say $p.status;
```

🦋 Atrodiet programmu failā [kept-or-broken.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/kept-or-broken.raku).

## Izvade

```
Kept
```

## Komentāri

1. Pēc tam, kad bloks veiksmīgi pabeidz darbu, solījums ir _turēts_.

1. `.status` to paziņo kā `Kept`. Ja bloks būtu metis izņēmumu, statuss būtu `Broken`.

{% include nav.html %}
