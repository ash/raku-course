---
title: 'Oplossing: Wacht een mislukking af'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $p = start { die 'boom' };

try {
    await $p;
    CATCH {
        default { say "caught: {.message}" }
    }
}
```

🦋 Je kunt de broncode vinden in het bestand [await-failure.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-failure.raku).

## Uitvoer

```
caught: boom
```

## Opmerkingen

1. Het blok van de promise werpt, dus de promise is *verbroken*. De exceptie gaat niet verloren — ze wordt vastgehouden tot iemand de promise afwacht.

1. `await $p` werpt haar daar meteen opnieuw, waar de `CATCH`-faser haar als elke gewone exceptie afhandelt. Zo duiken fouten in achtergrondwerk op waar je op het resultaat wacht.

{% include nav.html %}
