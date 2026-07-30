---
title: 'Oplossing: Maak een map leeg'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
mkdir 'cache';
spurt 'cache/a.tmp', '1';
spurt 'cache/b.tmp', '2';

.unlink for 'cache'.IO.dir;
rmdir 'cache';

say 'cache'.IO.e;
```

🦋 Je kunt de broncode vinden in het bestand [clear-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/clear-a-directory.raku).

## Uitvoer

```
False
```

## Opmerkingen

1. `rmdir` verwijdert alleen een lege map, dus de bestanden moeten er eerst uit. `'cache'.IO.dir` somt de items op, en `.unlink for …` verwijdert er elk van.

1. Nu de map leeg is, haalt `rmdir` haar weg. De afsluitende `.e`-test meldt `False`, wat bevestigt dat `cache` verdwenen is.

{% include nav.html %}
