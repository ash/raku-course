---
title: Oplossing voor ‘Driedubbele negatie’
---

{% include menu.html %}

Het programma dat in de taak wordt getoond, zal niet compileren en vereist een kleine aanpassing. Hier is de correcte en werkende variant (spatie toegevoegd om `!` en `!!` te scheiden):

## Code

```raku
my $value = False;
say ! !!$value;
```

🦋 Je kunt de volledige code vinden in het bestand [triple-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/triple-negation.raku).

## Uitvoer

Het programma print een omgekeerde Booleaanse waarde zoals je waarschijnlijk had verwacht:

```console
$ raku triple-negation.raku
True
```

## Opmerkingen

Het was een beetje onverwacht dat het programma met drie uitroeptekens niet compileerde:

```console
$ raku triple-negation.raku
===SORRY!=== Fout tijdens het compileren van /Users/ash/raku-course/exercises/booleans/triple-negation.raku
Twee termen op een rij
op /Users/ash/raku-course/exercises/booleans/triple-negation.raku:2
------> say !!!⏏$value;
    verwacht een van:
        infix
        infix stopper
        postfix
        statement einde
        statement modifier
        statement modifier lus
```

Een extra spatie lost dit probleem op. Maar val niet in een andere valkuil. Overweeg het volgende programma:

```raku
my $value = False;
say !!! $value;
```

Dit programma compileert maar eindigt met de volgende boodschap:

```console
$ raku triple-negation.raku
False
    in block <unit> at exercises/booleans/triple-negation.raku line 2
```

Dit gebeurt omdat `!!!` een speciale operator is voor het markeren van een deel van de code als stubcode. Als het programma dit punt bereikt, eindigt het en print het de boodschap, die in ons geval de huidige waarde van de variabele `$value` was. Raadpleeg 📖 [de documentatie](https://docs.raku.org/routine/!!!) voor meer details.

{% include nav.html %}