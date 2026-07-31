---
title: 'Solutio: Annus et mensis'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my regex year  { \d ** 4 }
my regex month { \d ** 2 }

if '2025-06' ~~ / <year> '-' <month> / {
    say $<year>;
    say $<month>;
}
```

🦋 Inveni codicem fontem in archivo [year-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/year-token.raku).

## Exitus

```
｢2025｣
｢06｣
```

## Commentarii

1. Duae expressiones regulares nominatae declarantur, unaquaeque unam diei partem describens: `year` quattuor cifrarum et `month` duarum.

1. Exemplar eas cum lineola litterali inter se coniungit, et unaquaeque sub proprio nomine capitur. Maius exemplar ex parvis nominatis partibus sic aedificare est exacte idea quam grammatica formalem reddit.

{% include nav.html %}
