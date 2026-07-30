---
title: 'Oplossing: Het meest voorkomende element'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @values = <a b a c a b>;

my %count;
%count{$_}++ for @values;

say %count.sort(-*.value)[0].key;
```

🦋 Je kunt de broncode vinden in het bestand [most-common.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/most-common.raku).

## Uitvoer

```
a
```

## Opmerkingen

1. Nadat elke waarde in `%count` geteld is, zet de paren op `-*.value` sorteren de
frequentste voorop; `[0].key` geeft daarna dat element terug.

1. Raku kan het tellen voor je doen met een [`Bag`](/nl/advanced/sets-bags-mixes),
die bijhoudt hoe vaak elke waarde voorkomt. Daarna kiest `.max(*.value)` het
paar met het hoogste aantal, en `.key` is het element zelf:

    ```raku
    my @values = <a b a c a b>;

    say @values.Bag.max(*.value).key; # a
    ```

    De hele telling is één enkele methodeaanroep, en er is geen expliciete hash om
    te beheren.

{% include nav.html %}
