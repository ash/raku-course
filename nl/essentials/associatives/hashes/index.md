---
title: Hashes
---

{% include menu.html %}

Een _hash_ is een ander voorbeeld van associatieve datatypes in Raku. Het is een aggregaat datatype dat de namen van zijn items aan hun waarden koppelt. Laten we de nieuwe sigil introduceren die hash-variabelen gebruiken: `%`.

```raku
my %capitals;
```

Je kunt nu de hash gebruiken en er enkele initiële waarden aan toewijzen.

```raku
%capitals = Frankrijk => 'Parijs', Italië => 'Rome';
```

Net als bij andere datatypes kunnen beide acties samen worden uitgevoerd:

```raku
my %capitals = Frankrijk => 'Parijs', Italië => 'Rome';
```

## Toegang tot de elementen

Het subscriptie van de elementen is vergelijkbaar met wat we hebben gezien voor [paren](../pairs). Gebruik een paar hoekige haken of accolades met een string:

```raku
say %capitals<Frankrijk>;
say %capitals{'Italië'};
```

Hashes zijn muteerbaar, dus je kunt zowel de bestaande waarden wijzigen als nieuwe toevoegen:

```raku
%capitals<Duitsland> = 'Berlijn';
```

## Sleutels en waarden

De twee ingebouwde methoden, `keys` en `values`, retourneren de lijsten van de sleutels en de waarden van een hash:

```raku
say %capitals.keys;
say %capitals.values;
```

Hier is een voorbeeld van de uitvoer van dit programma:

    (Duitsland Italië Frankrijk)
    (Berlijn Rome Parijs)

Merk op dat hash-elementen niet geordend zijn, maar de volgorde van de sleutels en waarden, geretourneerd door de bovenstaande methoden, identiek is.

{% include nav.html %}