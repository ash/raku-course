---
title: 'Oplossing: Voeg twee voorraden samen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my %shop-a = apples => 3, pears => 2;
my %shop-b = apples => 4, plums => 5;

my %total;
for %shop-a, %shop-b -> %shop {
    %total{$_} += %shop{$_} for %shop.keys;
}

say %total.sort.map({ "{.key}: {.value}" }).join(', ');
```

🦋 Je kunt de broncode vinden in het bestand [merge-inventories.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/merge-inventories.raku).

## Uitvoer

```
apples: 7, pears: 2, plums: 5
```

## Opmerkingen

1. Over beide hashes lussen en `%total{$_} += ...` doen telt elke hoeveelheid bij
het lopende totaal op, of de sleutel nu eerder gezien is of niet — een ontbrekende sleutel begint
op nul.

1. `%total.sort` zet de paren op sleutel op volgorde, en de `.map` formatteert elk als
`sleutel: waarde` voordat ze samengevoegd worden.

{% include nav.html %}
