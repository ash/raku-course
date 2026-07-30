---
title: 'Oplossing: Tel de tekens'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
spurt 'data.txt', 'Raku';

say slurp('data.txt').chars;
```

🦋 Je kunt de broncode vinden in het bestand [count-characters.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/count-characters.raku).

## Uitvoer

```
4
```

## Opmerkingen

1. `spurt` schrijft de string `Raku` naar het bestand.

1. `slurp` leest hem terug als string, en `.chars` telt de tekens — vier.

1. Als je het bestand bekijkt, zie je inderdaad alleen de vier tekens; het newline-teken wordt niet toegevoegd.

{% include nav.html %}
