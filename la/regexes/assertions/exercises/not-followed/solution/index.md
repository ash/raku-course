---
title: 'Solutio: Non sequente'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say so '50 dollars' ~~ / \d+ >> <!before '%'> /;
```

🦋 Inveni codicem fontem in archivo [not-followed.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/not-followed.raku).

## Exitus

```
True
```

## Commentarii

1. `<!before '%'>` prospectus negativus est: succedit solum cum textus statim post numerum `%` **non** est.

1. `>>` est finis verbi qui **finem** numeri notat, et hic refert. Sine eo avidum `\d+` retro cederet: in `50% off` `0` relinqueret et solam `5` congrueret — quam `%` *non* sequitur — itaque exemplar falso succederet. `>>` cogit `\d+` totum numerum capere, ita ut prospectus in vero fine probetur. Ideo `50 dollars` `True` dat, dum `50% off` recte `False` dat.

{% include nav.html %}
