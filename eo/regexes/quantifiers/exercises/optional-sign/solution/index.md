---
title: 'Solvo: Nedeviga signo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say '-42' ~~ / '-'? \d+ /;
```

🦋 Vi povas trovi la fontkodon en la dosiero [optional-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/optional-sign.raku).

## Eligo

```
｢-42｣
```

## Komentoj

1. La parto `'-'?` kongruas kun nedeviga minussigno — nul aŭ unu el ili.

1. `\d+` poste kongruas kun la serio de ciferoj. La sama ŝablono ankaŭ kongruas kun nombro sen signo, kiel `42`.

{% include nav.html %}
