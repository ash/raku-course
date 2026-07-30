---
title: 'Oplossing: Tap een lijst af'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
Supply.from-list('red', 'green', 'blue').tap(-> $v { say $v });
```

🦋 Je kunt de broncode vinden in het bestand [tap-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/tap-a-list.raku).

## Uitvoer

```
red
green
blue
```

## Opmerkingen

1. `Supply.from-list` zendt de drie strings op volgorde uit.

1. De tap draait voor elk daarvan één keer en drukt de string af.

{% include nav.html %}
