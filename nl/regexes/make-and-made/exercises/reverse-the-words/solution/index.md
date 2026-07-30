---
title: 'Oplossing: Keer de woorden om'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
grammar Phrase {
    token TOP  { <word> [ ' ' <word> ]* { make $<word>».made.join(' ') } }
    token word { \w+ { make $/.flip } }
}

say Phrase.parse('hello world').made;
```

🦋 Je kunt de broncode vinden in het bestand [reverse-the-words.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/reverse-the-words.raku).

## Uitvoer

```
olleh dlrow
```

## Opmerkingen

1. Elk token `word` maakt zijn eigen omgekeerde tekst: zijn inline blok draait telkens wanneer een woord matcht, en `make $/.flip` bewaart het woord — `$/` is de huidige match — achterstevoren gespeld.

1. `TOP` matcht de woorden met `<word> [ ' ' <word> ]*` — één woord, dan een willekeurig aantal keren "spatie plus woord" — en combineert ze. `$<word>` is de lijst met elke woordmatch; `».made` haalt de omgekeerde tekst eruit die elk bewaard heeft, en `.join(' ')` bouwt de woordgroep met spaties weer op.

1. Die vorm van "item, dan item, dan item…" komt vaak genoeg voor om een afkorting te hebben: de scheider `%`. `<word>+ % ' '` schrijven betekent "een of meer `<word>`, gescheiden door een spatie", en matcht precies dezelfde woordgroepen als `<word> [ ' ' <word> ]*` — alleen compacter.

1. `make` en `made` werken hier dus op twee niveaus: de kleine stukjes maken hun waarden, en het geheel wordt daaruit gemaakt. `.made` op het resultaat lezen geeft `olleh dlrow`.

{% include nav.html %}
