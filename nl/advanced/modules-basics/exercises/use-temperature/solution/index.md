---
title: 'Solution: Gebruik de converter'
translations_gpt: De oplossing van 'Gebruik de omrekener'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

Het programma, `temperature.raku`:

```raku
use Temperature;

sub MAIN($celsius) {
    say c-to-f($celsius);
}
```

🦋 Je kunt beide bronbestanden vinden in de map [exercises/advanced/modules-basics/use-temperature](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/use-temperature).

## Uitvoer

```console
$ raku -I. temperature.raku 100
212
```

## Opmerkingen

1. `use Temperature` laadt de module en importeert de geëxporteerde subroutine `c-to-f`, zodat het programma deze direct kan aanroepen.

1. `sub MAIN($celsius)` ontvangt het opdrachtregelargument, zodat de om te rekenen temperatuur wordt gekozen bij het uitvoeren van het programma in plaats van hardcoded te zijn. Uitgevoerd zonder argument drukt Raku automatisch een gebruiksbericht af.

1. De module moet bereikbaar zijn, daarom wordt het programma uitgevoerd met `-I.` zodat Raku naar `Temperature.rakumod` zoekt in de huidige map. De omrekening van `100` °C geeft `212` °F.

{% include nav.html %}
