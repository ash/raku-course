---
title: 'Solvo: Tuta vorto'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say 'this is fine' ~~ /<< is >>/;
```

🦋 Vi povas trovi la fontkodon en la dosiero [whole-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/whole-word.raku).

## Eligo

```
｢is｣
```

## Komentoj

1. La ankroj `<<` kaj `>>` postulas vortlimon ĉe ĉiu flanko de `is`.

1. La literoj `is` ankaŭ sidas ene de `this`, sed tie ili havas neniun vortlimon maldekstre, do la motoro preterlasas tiun aperon kaj anstataŭe kongruas kun la memstara vorto `is`.

1. Ambaŭ kandidatoj presas la saman `｢is｣`, do kiel vi scias, kiu efektive kongruis? Ŝanĝu la `is` kaŝitan ene de `this` — ekzemple, faru la ĉenon `'thus is fine'`. La eligo ankoraŭ estas `｢is｣`, senŝanĝa, pruvante, ke tiu apero neniam estis la kongruo. Nun ŝanĝu anstataŭe la memstaran vorton (ekzemple, `'this it fine'`) kaj la kongruo malaperas (`Nil`). Vi ankaŭ povas demandi al la kongruo, kie ĝi komenciĝas: `('this is fine' ~~ /<< is >>/).from` redonas `5`, la pozicion de la memstara `is`, ne `2`.

{% include nav.html %}
