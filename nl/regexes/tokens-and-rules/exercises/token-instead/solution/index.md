---
title: 'Oplossing: Regex versus token'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my regex r { \d+ '5' }
my token t { \d+ '5' }

say so '12345' ~~ / <r> /;
say so '12345' ~~ / <t> /;
```

🦋 Je kunt de broncode vinden in het bestand [token-instead.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/token-instead.raku).

## Uitvoer

```
True
False
```

## Opmerkingen

1. In de `regex` grijpt `\d+` eerst heel `12345`, en **krabbelt** daarna **terug** — hij geeft de afsluitende `5` terug zodat de letterlijke `5` kan matchen. De regex slaagt dus.

1. Het `token` weigert iets terug te geven: `\d+` houdt heel `12345`, de letterlijke `5` vindt niets meer, en het token mislukt. Dit gedrag zonder terugkrabbelen is precies waarom `token` de juiste standaardkeuze binnen grammatica's is.

{% include nav.html %}
