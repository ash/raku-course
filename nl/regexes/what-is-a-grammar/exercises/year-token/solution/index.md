---
title: 'Oplossing: Jaar en maand'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my regex year  { \d ** 4 }
my regex month { \d ** 2 }

if '2025-06' ~~ / <year> '-' <month> / {
    say $<year>;
    say $<month>;
}
```

🦋 Je kunt de broncode vinden in het bestand [year-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/year-token.raku).

## Uitvoer

```
｢2025｣
｢06｣
```

## Opmerkingen

1. Er worden twee benoemde regexes gedeclareerd, die elk één stuk van de datum beschrijven: een `year` van vier cijfers en een `month` van twee cijfers.

1. Het patroon combineert ze met een letterlijk streepje ertussen, en elk wordt onder zijn eigen naam gecapturd. Een groter patroon uit kleine benoemde onderdelen bouwen is precies het idee dat een grammatica formaliseert.

{% include nav.html %}
