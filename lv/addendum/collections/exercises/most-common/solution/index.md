---
title: 'Risinājums: Biežākais elements'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @values = <a b a c a b>;

my %count;
%count{$_}++ for @values;

say %count.sort(-*.value)[0].key;
```

🦋 Atrodiet programmu failā [most-common.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/most-common.raku).

## Izvade

```
a
```

## Komentāri

1. Pēc katras vērtības saskaitīšanas `%count`, kārtošana pēc `-*.value` liek
biežāko pa priekšu; `[0].key` tad atdod šo elementu.

1. Raku skaitīšanu var izdarīt jūsu vietā ar [`Bag`](/lv/advanced/sets-bags-mixes),
kas saskaita, cik reižu katra vērtība parādās. Tad `.max(*.value)` izvēlas pāri
ar lielāko skaitu, un `.key` ir pats elements:

    ```raku
    my @values = <a b a c a b>;

    say @values.Bag.max(*.value).key; # a
    ```

    Visa saskaitīšana ir viens metodes izsaukums, un nav nekādas jaucējtabulas, kas
    būtu jāpārvalda.

{% include nav.html %}
