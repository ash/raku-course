---
title: 'Solvo: Ĉiuj nombroj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @numbers = 'x=5, y=10, z=15' ~~ m:g/\d+/;
say @numbers.map(*.Str).join('+');
```

🦋 Vi povas trovi la fontkodon en la dosiero [all-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/all-numbers.raku).

## Eligo

```
5+10+15
```

## Komentoj

1. `\d+` kongruas kun tuta serio de ciferoj, kaj `:g` kolektas ĉiun tian serion — ĉi tie `5`, `10` kaj `15`.

1. Ĉiu kongruo estas kongrua objekto, do `.map(*.Str)` transformas ilin en simplajn ĉenojn antaŭ ol kunigi ilin per `+`.

{% include nav.html %}
