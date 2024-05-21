---
title: 'Oplossing: Verkeerslichten'
---

{% include menu.html %}

Het idee van de oplossing is om de indexering van de array met de vier staten van de verkeerslichten te 'loopen':

```raku
my @lights = <yellow red yellow green>;
```

Tijdens de eerste seconden kan het aantal seconden sinds de start direct worden gebruikt als een index in de array. Wanneer het 3 overschrijdt, kun je het terug naar het begin van de array loopen met de modulo-operator `%`. De lengte van de array is `@lights.elems`, maar wanneer het wordt gebruikt als een operand van `%`, is het niet nodig om de `elems`-methode aan te roepen, omdat de naam van de array zal worden omgezet naar een nummer, en die omzetting is ontworpen om het aantal elementen terug te geven.

## Code

Hier is de oplossing:

```raku
my @lights = <yellow red yellow green>;

say @lights[51 % @lights];
say @lights[102 % @lights];
say @lights[305 % @lights];
```

🦋 Vind het programma in het bestand [traffic-lights.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/traffic-lights.raku).

## Uitvoer

Voer het programma uit. Probeer daarnaast andere waarden in het programma.

```console
$ raku exercises/positionals/traffic-lights.raku
green
yellow
red
```

{% include nav.html %}