---
title: 'Oplossing: Een hyper map'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say <apple banana pear cherry>.hyper.map(*.uc).grep(*.chars > 4).join(' ');
```

🦋 Je kunt de broncode vinden in het bestand [hyper-map.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-map.raku).

## Uitvoer

```
APPLE BANANA CHERRY
```

## Opmerkingen

1. `.hyper` draait de hele keten — de `map` die in hoofdletters zet en de `grep` die op lengte filtert — parallel over threads.

1. Omdat `.hyper` de volgorde bewaart, blijven de overgebleven woorden in hun oorspronkelijke volgorde staan, dus levert `.join(' ')` `APPLE BANANA CHERRY` op. `pear`, met slechts vier letters, valt af.

{% include nav.html %}
