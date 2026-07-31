---
title: 'Solutio: Una grammatica, duae classes actionum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
grammar Pair {
    token TOP { <a> ',' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class Sum  { method TOP($/) { make $<a>.Int + $<b>.Int } }
class Diff { method TOP($/) { make $<a>.Int - $<b>.Int } }

say Pair.parse('10,20', actions => Sum.new).made;
say Pair.parse('10,20', actions => Diff.new).made;
```

🦋 Inveni codicem fontem in archivo [two-actions.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/two-actions.raku).

## Exitus

```
30
-10
```

## Commentarii

1. Grammatica solum formam `numerus,numerus` describit; nihil scit de eo quid computandum sit.

1. Duae classes actionum diversas significationes eidem analysi adfigunt — una numeros summat, altera eos subtrahit. Aliud obiectum `actions` ad `.parse` tradere satis est ut alium effectum accipias, sine grammatica omnino mutata.

{% include nav.html %}
