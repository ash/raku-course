---
title: Modules installeren van het web
---

{% include menu.html %}

Naast de modules die je zelf schrijft, is er een grote verzameling modules gepubliceerd door de Raku-gemeenschap. Ze bestrijken alles van webframeworks tot dataformaten, en je kunt ze installeren en gebruiken in je eigen programma's.

## De `zef`-installer

Modules worden geïnstalleerd met `zef`, de standaard modulebeheerder die wordt meegeleverd met Rakudo. Om een module te installeren, geef je `zef` de naam van de module:

```console
$ zef install JSON::Fast
```

`zef` downloadt de module samen met alles waar deze van afhankelijk is, voert de tests uit en installeert deze. Na installatie staat een module automatisch op het zoekpad, zodat een programma deze kan laden met een gewone `use` — de optie `-I` is niet nodig:

```raku
use JSON::Fast;
```

Je kunt ook het ecosysteem doorzoeken en modules bijwerken of verwijderen:

```console
$ zef search Test
$ zef uninstall JSON::Fast
```

## Waar modules vandaan komen

Gepubliceerde modules bevinden zich in het Raku-_ecosysteem_. Je kunt het bekijken op de website [raku.land](https://raku.land), waar de beschikbare distributies en hun documentatie worden vermeld.

## `META6.json`

Een distributie die bedoeld is om te delen, bevat een beschrijvingsbestand genaamd `META6.json`. Dit bestand registreert de naam van de distributie, de versie, de modules die het aanbiedt en de andere distributies waar het van afhankelijk is. `zef` leest dit bestand om te weten wat er geïnstalleerd moet worden en hoe de onderdelen in elkaar passen. Wanneer je je eigen module publiceert, is het aanleveren van een correct `META6.json` wat het voor iedereen installeerbaar maakt.

{% include nav.html %}
