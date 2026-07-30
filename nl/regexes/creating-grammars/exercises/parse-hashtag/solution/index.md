---
title: 'Oplossing: Ontleed een hashtag'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
grammar Hashtag {
    token TOP { '#' <tag> }
    token tag { \w+ }
}

say Hashtag.parse('#raku')<tag>;
```

🦋 Je kunt de broncode vinden in het bestand [parse-hashtag.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-hashtag.raku).

## Uitvoer

```
｢raku｣
```

## Opmerkingen

1. `TOP` schrijft de vaste `#` uit, gevolgd door het token `<tag>`.

1. `.parse` eist dat de hele string matcht, en de tag is daarna als de capture `<tag>` beschikbaar.

## Een alternatief

Je kunt in plaats daarvan `tag` de hele hashtag laten matchen — de `#` samen met het woord — en het woord via een geneste regel `word` bereiken:

```raku
grammar Hashtag {
    token TOP  { <tag> }
    token tag  { '#' <word> }
    token word { \w+ }
}

say Hashtag.parse('#raku')<tag><word>;
```

Dit drukt dezelfde `｢raku｣` af. Nu captureert `<tag>` de hele `#raku`, terwijl het woord daarbinnen als `<tag><word>` bereikt wordt. De grammatica leest iets meer als het ding dat ze beschrijft — een hashtag *is* een `#` gevolgd door een woord, en het woord is op zichzelf een benoemd onderdeel.

{% include nav.html %}
