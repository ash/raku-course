---
title: 'Solutio: Littera aut numerus'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say '  @x7' ~~ / <[a..z 0..9]> /;
```

🦋 Inveni codicem fontem in archivo [digit-class.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/digit-class.raku).

## Exitus

```
｢x｣
```

## Commentarii

1. Classis plura intervalla, unum post aliud, tenere potest. `<[a..z 0..9]>` unum characterem congruit qui littera minuscula **aut** cifra est. Spatium inter duo intervalla sola legibilitatis causa adest — `<[a..z0..9]>` exacte idem significat, quia spatia intra `<[…]>` neglecta sunt, sicut alibi in regex.

1. A sinistra percurrens, duo spatia et `@` in classe non sunt et praetereuntur; primus character congruens est `x`. (Haec classis coniuncta prope est ei quod compendium `\w` significat.)

{% include nav.html %}
