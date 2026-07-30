---
title: De achterwaartse feed
translations_gpt:
---

{% include menu.html %}

Elke feed tot nu toe stroomde voorwaarts met `==>`, van een bron links naar een doel rechts. Raku heeft ook de gespiegelde operator, `<==`, de **achterwaartse feed**. Die loopt andersom: het doel staat **links**, en de gegevens worden van de bron **rechts** binnengetrokken.

Hier is de pijplijn met even getallen van eerder, achterstevoren geschreven:

```raku
my @evens <== grep(* %% 2) <== (1..10);
say @evens; # [2 4 6 8 10]
```

Lees hem van rechts naar links: neem `1..10`, houd de even getallen, en verzamel ze in `@evens`. Het resultaat is precies hetzelfde als `(1..10) ==> grep(* %% 2) ==> my @evens` — alleen de richting waarin je de fasen schrijft is veranderd.

Achterwaartse feeds rijgen zich op dezelfde manier aaneen, en opnieuw gaat het doel voorop:

```raku
my @result <== map(* ** 2) <== grep(* %% 2) <== (1..10);
say @result; # [4 16 36 64 100]
```

Het werk gebeurt nog steeds bron-eerst — begin met `1..10`, houd de even getallen, kwadrateer ze — maar op papier staan de fasen opgesomd van de bestemming terug naar de oorsprong. De volgorde van de elementen blijft ongemoeid; `<==` verandert alleen de leesrichting, nooit de gegevens.

Omdat code doorgaans van links naar rechts leest, leest de voorwaartse `==>` meestal natuurlijker: je komt de gegevens eerst tegen en volgt ze naar waar ze belanden. De achterwaartse `<==` is er voor de gelegenheden waarbij met de bestemming beginnen het verhaal beter vertelt — eerst benoemen *wat je bouwt* en daarna *waaruit het gebouwd is*. De twee zijn exacte spiegelbeelden, dus kies de richting die het best leest.

{% include nav.html %}
