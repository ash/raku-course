---
title: 'Solvo: Eniri blokon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
for 1..2 {
    ENTER say '--entering';
    say "body $_";
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [enter-a-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/enter-a-block.raku).

## Eligo

```
--entering
body 1
--entering
body 2
```

## Komentoj

1. `ENTER` ruliĝas ĉiufoje kiam la bloko estas enirata, ĝuste antaŭ ĝia korpo. Ĉar la buklo eniras sian korpon unufoje per iteracio, `--entering` estas presata antaŭ ĉiu `body`-linio.

1. Jen la diferenco inter `ENTER` kaj `FIRST`: `FIRST` ruliĝus nur unufoje por la tuta buklo, dum `ENTER` ruliĝas ĉe ĉiu eniro.

{% include nav.html %}
