---
title: Geneste hashes
---

{% include menu.html %}

Het maken van geneste hashes is vergelijkbaar met het maken van [geneste arrays](/nl/essentials/positionals/nested-arrays). Gebruik accolades om de binnenste hashes te omarmen.

```raku
my %people =
    John => {
        age => 20,
        city => 'Madrid'
    },
    Alla => {
        age => 21,
        city => 'Tokyo'
    };
```

Merk op dat een afsluitende komma een geldig syntactisch element is:

```raku
my %people =
    John => {
        age => 20,
        city => 'Madrid',
    },
    Alla => {
        age => 21,
        city => 'Tokyo',
    };
```

Het hebben van een komma helpt wanneer je de structuur bewerkt door de regels te kopiëren en plakken.

Om de elementen uit de binnenste hashes te halen, gebruik je twee sleutels achter elkaar.

```raku
say %people<John><city>; # Madrid
say %people<Alla><city>; # Tokyo
```

{% include nav.html %}