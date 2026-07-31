---
title: 'Solutio: Inter uncos'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say '$50' ~~ / <?after '$'> \d+ >> <!before '.'> /;
```

🦋 Inveni codicem fontem in archivo [whole-dollar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/whole-dollar.raku).

## Exitus

```
｢50｣
```

## Commentarii

1. `<?after '$'>` respectus positivus est — `$` statim ante numerum postulat — et `<!before '.'>` prospectus negativus est — postulat ut `.` **non** sequatur. Neque `$` neque circumstantia pars congruentiae fiunt, itaque effectus est sola `50`.

1. `>>` est finis verbi qui finem numeri notat. Sine eo avidum `\d+` retro cedere posset: in `$39.99` `9` relinqueret et `3` congrueret (quam `.` non sequitur). `>>` cogit totum numerum capi, ita ut `$3.99` et `$39.99` recte nihil congruant.

1. Hic est casus ubi prospectus pretium suum meret: «non sequente puncto decimali» per gregem capientem ordinarium exprimere non potes, quia nihil ibi est quod capias — sola condicio quae probanda est.

{% include nav.html %}
