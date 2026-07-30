---
title: 'Oplossing: Een kaal getal'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say '5 and $9' ~~ / <!after '$'> \d+ /;
```

🦋 Je kunt de broncode vinden in het bestand [bare-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/bare-number.raku).

## Uitvoer

```
｢5｣
```

## Opmerkingen

1. `<!after '$'>` is een negatieve lookbehind: hij slaagt alleen wanneer het teken vlak vóór de huidige positie **geen** `$` is. Hij controleert die buur zonder haar te verbruiken.

1. De `9` wordt afgewezen omdat hij vlak achter een `$` staat, dus matcht de engine in plaats daarvan de eerdere `5`, waar niets aan voorafgaat.

{% include nav.html %}
