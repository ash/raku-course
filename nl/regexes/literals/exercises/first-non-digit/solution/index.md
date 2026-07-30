---
title: 'Oplossing: Het eerste niet-cijfer'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say '42abc' ~~ /\D/;
```

🦋 Je kunt de broncode vinden in het bestand [first-non-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/first-non-digit.raku).

## Uitvoer

```
｢a｣
```

## Opmerkingen

1. `\D` is het tegenovergestelde van `\d`: het matcht elk teken dat geen cijfer is.

1. De eerste twee tekens zijn cijfers, dus begint de match bij `a`.

{% include nav.html %}
