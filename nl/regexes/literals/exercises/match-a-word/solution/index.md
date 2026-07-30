---
title: 'Oplossing: Match een woordgroep'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say 'I love Raku' ~~ / 'love Raku' /;
```

🦋 Je kunt de broncode vinden in het bestand [match-a-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/match-a-word.raku).

## Uitvoer

```
｢love Raku｣
```

## Opmerkingen

1. De spatie tussen de woorden is hier betekenisvol, dus staat de woordgroep tussen aanhalingstekens: `'love Raku'`. Zonder de aanhalingstekens zou de regex-engine de spatie negeren en naar `loveRaku` zoeken, wat niet in de string staat.

1. De smartmatch geeft een matchobject terug dat de hele aangehaalde woordgroep bestrijkt, en `say` drukt dat tussen hoekhaken af.

{% include nav.html %}
