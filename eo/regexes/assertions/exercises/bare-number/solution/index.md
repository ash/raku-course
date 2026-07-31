---
title: 'Solvo: Nuda nombro'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say '5 and $9' ~~ / <!after '$'> \d+ /;
```

🦋 Vi povas trovi la fontkodon en la dosiero [bare-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/bare-number.raku).

## Eligo

```
｢5｣
```

## Komentoj

1. `<!after '$'>` estas negativa malantaŭrigardo: ĝi sukcesas nur, kiam la signo tuj antaŭ la nuna pozicio **ne** estas `$`. Ĝi kontrolas tiun najbaron sen konsumi ĝin.

1. La `9` estas malakceptata, ĉar ĝi sidas tuj post `$`, do la motoro anstataŭe kongruas kun la pli frua `5`, kie nenio antaŭas ĝin.

{% include nav.html %}
