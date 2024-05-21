---
title: Oplossing van ‘Het onderzoeken van de uitvoer van prompt — Strings’
---

{% include menu.html %}

## Code

Hier is het volledige programma dat de taak uitvoert en zowel de ingevoerde string als het type ervan afdrukt.

```raku
my $name = prompt 'Wat is je naam? ';
say $name;
say $name.WHAT;
```

🦋 Je kunt de broncode vinden in het bestand [prompt-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/prompt-strings.raku).

## Testuitvoeringen

Voer het programma een paar keer uit en voer verschillende namen in. Het programma echoot de invoer en meldt ook dat de variabele een string bevat, met andere woorden, een object van het type `Str`.

```console
$ raku exercises/data-types/prompt-strings.raku
Wat is je naam? Andrey
Andrey
(Str)
```

Voer nu het programma opnieuw uit, typ een paar spaties in plaats van een naam en druk op Enter.

```console
$ raku exercises/data-types/prompt-strings.raku
Wat is je naam?    

(Str)
```

We zien de uitvoer niet, maar we zien dat het type van de variabele nog steeds `Str` is.

{% include nav.html %}