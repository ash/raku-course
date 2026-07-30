---
title: 'Oplossing: Schrikkeljaren'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
for 2000, 1900, 2024, 2023 -> $year {
    my $leap = $year %% 400 || ($year %% 4 && !($year %% 100));

    say "$year: { $leap ?? 'leap' !! 'common' }";
}
```

🦋 Je kunt de broncode vinden in het bestand [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/leap-year.raku).

## Uitvoer

```
2000: leap
1900: common
2024: leap
2023: common
```

## Opmerkingen

1. De regel leest rechtstreeks als een booleaanse uitdrukking: een schrikkeljaar is er een dat door
400 deelbaar is, *of* een dat door 4 maar niet door 100 deelbaar is. `%%` is de deelbaarheidstest.

1. `1900` is deelbaar door 100 maar niet door 400, dus is het gewoon; `2000` is deelbaar door
400, dus is het schrikkeljaar.

1. Raku's type [`Date`](/nl/advanced/date-and-time) kent deze regel al. Het stelt
haar beschikbaar als `.is-leap-year` — een methode op een *datumobject*, dus je maakt een willekeurige datum in het
jaar (hier 1 januari) en vraagt het:

    ```raku
    for 2000, 1900, 2024, 2023 -> $year {
        my $leap = Date.new($year, 1, 1).is-leap-year;
        say "$year: { $leap ?? 'leap' !! 'common' }";
    }
    ```

    De oefening gaat er natuurlijk om de regel zelf te schrijven.

{% include nav.html %}
