---
title: 'Solution: Een URL opbouwen'
translations_gpt: De oplossing van 'Bouw een URL'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my @parts = <http :// example .com>;

my $url = [~] @parts;
say $url;
say $url.chars;
```

🦋 Je kunt de broncode vinden in het bestand [concatenate-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/concatenate-a-list.raku).

## Uitvoer

```
http://example.com
18
```

## Opmerkingen

1. De array is geschreven met de hoekaanhalingstekens `<...>`, wat hetzelfde is als `'http', '://', 'example', '.com'`.

1. De reductie-meta-operator `[~]` plaatst de tekenreeksconcatenatie-operator `~` tussen alle elementen, dus `[~] @parts` plakt de vier stukken aan elkaar tot de enkele tekenreeks `http://example.com`.

1. Door het resultaat op te slaan in `$url` kunnen we het hergebruiken: `$url.chars` meldt vervolgens dat de samengestelde URL `18` tekens lang is.

{% include nav.html %}
