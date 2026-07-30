---
title: 'Oplossing: Hergebruik een token'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my regex word { \w+ }

if 'cat dog' ~~ / <word> ' ' <word> / {
    say $<word>[0];
    say $<word>[1];
}
```

🦋 Je kunt de broncode vinden in het bestand [reuse-a-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/reuse-a-token.raku).

## Uitvoer

```
｢cat｣
｢dog｣
```

## Opmerkingen

1. Dezelfde benoemde regex `word` wordt twee keer in het patroon aangeroepen.

1. Wanneer een benoemde capture meer dan één keer voorkomt, vormen de resultaten een lijst, dus worden ze als `$<word>[0]` en `$<word>[1]` gelezen.

{% include nav.html %}
