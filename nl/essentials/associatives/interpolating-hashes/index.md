---
title: Interpolating hashes
---

{% include menu.html %}

Om array-elementen in dubbele aanhalingstekens te interpoleren, schrijf je ze zoals je dat in het programma zelf doet: `%data<FR>`. Om de hele hash te interpoleren, voeg je een paar lege hoekige of gekrulde haakjes toe: `@data{}`. Het volgende programma illustreert deze aanpak:

```raku
my %data = FR => 'Parijs', IT => 'Rome';

say "%data<FR>";
say "%data<>";

# Of:
# say "%data{}";
```

Dit programma print de gevraagde gegevens:

```console
$ raku t.raku
Parijs
FR	Parijs
IT	Rome
```

Merk op dat het printen van de hele hash meerrijige uitvoer kan genereren.

{% include nav.html %}