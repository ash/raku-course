---
title: Oplossing voor 'Naam lengte'
---

{% include menu.html %}

## Code

Hier is de oplossing voor de taak:

```raku
my $name = prompt 'Wat is je naam? ';
say $name.chars;
```

🦋 Je kunt de broncode vinden in het bestand [name-length.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/name-length.raku).

## Uitvoer

Voer het programma uit en voer de naam in.

```console
$ raku exercises/strings/name-length.raku 
Wat is je naam? Alexandra
9
```

## Opmerkingen

In dit programma krijgen we de lengte van de string door de `chars` methode aan te roepen op de `$name` variabele. Aangezien de variabele een string bevat, retourneert de methode de lengte ervan.

{% include nav.html %}