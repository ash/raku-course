---
title: 'Oplossing: Als er niets misgaat'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $r = try { 21 * 2 };

say $r.defined;
say $r;
```

🦋 Je kunt de broncode vinden in het bestand [try-succeeds.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/try-succeeds.raku).

## Uitvoer

```
True
42
```

## Opmerkingen

1. Wanneer het `try`-blok zonder exceptie draait, evalueert het eenvoudigweg naar de waarde van het blok.

1. Dus `$r` bevat `42`, en `$r.defined` is `True`.

{% include nav.html %}
