---
title: Modules aanmaken
translations_gpt: Modules maken
---

{% include menu.html %}

Naarmate programma's groeien, helpt het om ze op te splitsen in herbruikbare onderdelen. Een _module_ is een eenheid van code, bewaard in een eigen bestand, die andere programma's kunnen laden en gebruiken.

Een modulebestand heeft de extensie `.rakumod` en begint met het benoemen van de module met `unit module`. Subroutines die je erin schrijft zijn standaard privé; om er een beschikbaar te maken voor code die de module gebruikt, markeer je deze met de `is export`-eigenschap.

Hier is een module opgeslagen in een bestand genaamd `Greeting.rakumod`:

```raku
unit module Greeting;

sub hello($name) is export {
    return "Hello, $name!";
}
```

De subroutine `hello` heeft `is export`, dus deze zal zichtbaar zijn voor elk programma dat de module gebruikt. Een subroutine zonder `is export` zou privé blijven voor de module.

Een module kan ook gegevens delen via `our`-variabelen, die bereikbaar worden via de naam van de module. Een versienummer toevoegen aan `Greeting` is zo eenvoudig als één extra regel in het bestand:

```raku
our $version = '1.0';
```

Met die regel in `Greeting.rakumod` is de waarde beschikbaar als `$Greeting::version` overal waar de module is geladen.

De volgende onderwerpen laten zien [hoe een programma zo'n module laadt](/nl/advanced/modules-basics/using-modules) en wat het er precies van krijgt.

{% include nav.html %}
