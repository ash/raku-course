---
title: 'Oplossing: Tel de klinkers'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $text = 'Programming in Raku';

say +$text.comb(/ <[aeiouAEIOU]> /);
```

🦋 Je kunt de broncode vinden in het bestand [count-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/count-vowels.raku).

## Uitvoer

```
6
```

## Opmerkingen

1. Een regex aan `.comb` meegeven geeft elk matchend teken terug. De tekenklasse
`<[aeiouAEIOU]>` somt de klinkers in beide schrijfwijzen op.

1. Het voorvoegsel `+` zet de resulterende lijst in numerieke context, wat haar lengte geeft —
het aantal klinkers.

{% include nav.html %}
