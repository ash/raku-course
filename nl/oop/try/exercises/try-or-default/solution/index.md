---
title: 'Oplossing: Try of standaardwaarde'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $r = try { die 'no' } // 'default';

say $r;
```

🦋 Je kunt de broncode vinden in het bestand [try-or-default.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/try-or-default.raku).

## Uitvoer

```
default
```

## Opmerkingen

1. Het mislukkende `try`-blok evalueert naar een ongedefinieerde waarde.

1. De defined-or-operator `//` geeft daarom zijn rechterkant terug, `'default'`, wat een nette manier oplevert om in één regel met een terugval te herstellen.

{% include nav.html %}
