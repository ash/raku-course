---
title: 'Solutio: Whatever cum map'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $triple = * * 3;

say (1..4).map($triple);
```

🦋 Inveni codicem fontem in archivo [whatever-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/whatever-map.raku).

## Exitus

```
(3 6 9 12)
```

## Commentarii

1. `* * 3` est expressio Whatever quae fit `WhateverCode` unius argumenti — valor functionis omnino ordinarius in `$triple` servatus.

1. Quia mera functio est, `map` eam sicut quamlibet clausulam accipit et ad singula elementa seriei `1..4` applicat, unde `(3 6 9 12)`.

{% include nav.html %}
