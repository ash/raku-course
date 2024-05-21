---
title: De oplossing van 'Begroet een persoon'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $naam = prompt 'Wat is je naam? ';
say 'Hallo, ', $naam, '!';
```

🦋 Je kunt de broncode vinden in het bestand [greet-a-person.raku](https://github.com/ash/raku-course/blob/master/exercises/scalar-variables/greet-a-person.raku).

## Uitvoer

Voer het programma uit en voer een naam in wanneer je de prompt krijgt:

```console
$ raku exercises/scalar-variables/greet-a-person.raku 
Wat is je naam? Inge
Hallo, Inge!
```

## Opmerkingen

1. Dit programma gebruikt een scalair variabele `$naam` om een string te bewaren die door de gebruiker is ingevoerd als reactie op de prompt. Wanneer de variabele wordt gebruikt in de lijst die je doorgeeft aan de `say` routine, krijg je de naam in een bericht.

1. Er is een betere manier om dit probleem op te lossen met behulp van stringinterpolatie. Laten we binnenkort terugkomen op dit probleem.

{% include nav.html %}