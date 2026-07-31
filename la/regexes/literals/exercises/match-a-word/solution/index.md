---
title: 'Solutio: Locutionem inveni'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say 'I love Raku' ~~ / 'love Raku' /;
```

🦋 Inveni codicem fontem in archivo [match-a-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/match-a-word.raku).

## Exitus

```
｢love Raku｣
```

## Commentarii

1. Spatium inter verba hic significans est, itaque locutio virgulis involvitur: `'love Raku'`. Sine virgulis machina regex spatium neglegeret et `loveRaku` quaereret, quod in catena non est.

1. Congruentia sagax obiectum congruentiae reddit quod totam locutionem citatam tegit, quod `say` inter uncos angulares imprimit.

{% include nav.html %}
