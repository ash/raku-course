---
title: Notities over het gebruik van Unicode
---

{% include menu.html %}

Raku gaat ervan uit dat al je programmabestanden zijn opgeslagen als UTF-8 bestanden. Vanuit praktisch oogpunt betekent dit dat je je geen zorgen hoeft te maken over niet-ASCII tekens in bijvoorbeeld string-literals. Maar dat is niet alles. Je hoeft je hoogstwaarschijnlijk ook geen zorgen te maken als je programma een tekstbestand leest dat ook een UTF-8 bestand is. Dit betekent ook dat de stringlengte correct wordt gedetecteerd als het aantal tekens en niet als het aantal bytes. (We zullen hier later dieper op ingaan.)

Het volgende dat je moet weten, is dat je niet-Latijnse of niet-Engelse letters kunt gebruiken voor identificatoren. Je kunt je variabele `$ι` noemen in plaats van `$i` als je dat liever hebt, en de compiler zal het correct parsen.

Raku behandelt de Unicode-eigenschappen van de tekens nauwgezet genoeg. Bijvoorbeeld, het weet niet alleen of een teken een letter of een cijfer is, maar identificeert ook correct paartekens zoals haakjes of verschillende soorten haken. In veel gevallen kun je een ander type haakjes kiezen voor afzonderlijke delen van het programma. Bijvoorbeeld, je kunt ons 'Hello, World!' programma aanpassen om deze niet-Latijnse aanhalingstekens te gebruiken (je zult ze opnieuw zien wanneer we met Raku-grammatica's werken):

```raku
say ｢Hello, World!｣;
```

Sommige ingebouwde operators hebben twee vormen: een Unicode en een ASCII versie. Bijvoorbeeld, je kunt een ontkende vergelijking typen als `!=` of als `≠`. Hetzelfde geldt voor setbewerkingen: bijvoorbeeld, `∈` heeft een puur ASCII-equivalent `(elem)`. Of, er is een ingebouwde constante waarnaar je kunt verwijzen als `pi` of `π`.

Bij het werken met getallen kun je ervoor kiezen om breuken te gebruiken in de vorm van `½` in plaats van `0.5`. Of, het kwadraat van `$x` evalueren als `$x²` met behulp van een superscript-teken.

Vind de volledige lijst van dergelijke paren op de volgende documentatiepagina: 📖 [Unicode versus ASCII symbolen](https://docs.raku.org/language/unicode_ascii).

{% include nav.html %}