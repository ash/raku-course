---
title: 'Solution: Een waarschuwing onderdrukken'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $name;

my $greeting = quietly { "Hello, " ~ $name ~ "!" };
say $greeting;
```

🦋 Je kunt de broncode vinden in het bestand [silence-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/silence-warning.raku).

## Uitvoer

```
Hello, !
```

## Opmerkingen

1. Het interpoleren van de ongedefinieerde `$name` in de string activeert normaal een waarschuwing "use of uninitialized value". Door de expressie in `quietly` te wikkelen, wordt deze onderdrukt, zodat alleen de begroeting wordt afgedrukt.

1. Net als `do` geeft `quietly` de waarde van zijn blok terug, dus de samengestelde string (met de ontbrekende naam die een lege plek achterlaat) wordt opgeslagen in `$greeting`.

1. `quietly` verbergt alleen de waarschuwing — de waarde is nog steeds ongedefinieerd. Als je in plaats daarvan de ontbrekende waarde wilt *afhandelen*, geef dan een standaardwaarde op met de defined-or-operator `//`: `$name // 'friend'` levert `'friend'` op wanneer `$name` ongedefinieerd is, zodat `"Hello, " ~ ($name // 'friend') ~ "!"` `Hello, friend!` print zonder enige waarschuwing.

{% include nav.html %}
