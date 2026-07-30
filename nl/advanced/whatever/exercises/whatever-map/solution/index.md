---
title: 'Oplossing: Whatever met map'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $triple = * * 3;

say (1..4).map($triple);
```

🦋 Je kunt de broncode vinden in het bestand [whatever-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/whatever-map.raku).

## Uitvoer

```
(3 6 9 12)
```

## Opmerkingen

1. `* * 3` is een Whatever-uitdrukking die een `WhateverCode` met één argument wordt — een volkomen gewone functiewaarde, bewaard in `$triple`.

1. Omdat het gewoon een functie is, accepteert `map` hem net als elk blok en past hem toe op elk element van `1..4`, wat `(3 6 9 12)` oplevert.

{% include nav.html %}
