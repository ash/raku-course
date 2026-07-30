---
title: 'Solution: Een getypte MAIN'
translations_gpt: true
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
sub MAIN(Int $n) {
    say $n * 2;
}
```

🦋 Je kunt de broncode vinden in het bestand [typed-main.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/typed-main.raku).

## Uitvoer

```console
$ raku typed-main.raku 5
10

$ raku typed-main.raku abc
Usage:
  typed-main.raku <n>
```

## Opmerkingen

1. De `Int`-beperking betekent dat het commandoregelwoord eruit moet zien als een geheel getal. Bij `5` wordt het gebonden aan `$n` en drukt de body `10` af.

1. Bij `abc` kan de waarde geen `Int` worden, dus de signatuur komt niet overeen. Raku voert de body niet uit — het drukt in plaats daarvan het gegenereerde gebruiksbericht af, wat je argumentvalidatie geeft zonder handmatige controles.

{% include nav.html %}
