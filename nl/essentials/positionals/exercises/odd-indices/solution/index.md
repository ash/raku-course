---
title: 'Oplossing: Oneven indices'
---

{% include menu.html %}

Om deze taak op te lossen, kun je de `loop` constructie gebruiken en de lusvariabele bij elke iteratie met 2 verhogen. Maar je kunt ook een `for` lus gebruiken en de getallen van 1 tot de helft van de lengte van de array scannen, en ze dan met twee vermenigvuldigen.

## Code

Hier is de oplossing:

```raku
my @data = 10, 12, 1, 5, -9, 8, 36, 18, 21;

say @data[2 * $_ - 1] for 1 .. @data/2;
```

🦋 Vind het programma in het bestand [odd-indices.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/odd-indices.raku).

## Uitvoer

Voer eerst het programma uit met de originele data-elementen.

```console
$ raku exercises/positionals/odd-indices.raku
12
5
8
18
```

Voeg vervolgens nog een item toe aan de data:

```raku
my @data = 10, 12, 1, 5, -9, 8, 36, 18, 21, 22;
```

Bevestig dat het nieuwe element met een oneven index in de uitvoer verschijnt:

```console
$ raku exercises/positionals/odd-indices.raku
12
5
8
18
22
```

## Opmerkingen

In het volgende deel van de cursus zullen we terugkeren naar deze taak om deze op een compleet andere manier op te lossen.

{% include nav.html %}