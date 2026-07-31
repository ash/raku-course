---
title: 'Solutio: Textus congruens'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
'database' ~~ /base/;
say $/.Str;
```

🦋 Inveni codicem fontem in archivo [matched-text.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/matched-text.raku).

## Exitus

```
base
```

## Commentarii

1. Omnis congruentia sagax effectum suum in variabili speciali congruentiae `$/` servat, itaque nihil opus est illum nostrae variabili assignare.

1. Obiectum congruentiae textum congruentem tenet; `.Str` in `$/` vocans illum textum ut catenam ordinariam reddit. Obiectum congruentiae directe imprimere `｢base｣` loco eius ostendisset.

{% include nav.html %}
