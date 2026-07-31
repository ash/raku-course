---
title: 'Solutio: Quot digiti'
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
say (2 ** 1000).chars;
```

🦋 Inveni codicem fontem in archivo [big-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/big-factorial.raku).

## Exitus

```
302
```

## Commentarii

1. `2 ** 1000` exacte computatur: Raku non rotundat nec superfluet, quia integri praecisionem arbitrariam habent.

1. `chars` normaliter methodus chordarum est, sed vocata in integro primum numerum in textum decimalem convertit et deinde characteres numerat. Cum hic neque signum minus neque punctum decimale sit, numerus characterum exacte est numerus digitorum — `302`.

{% include nav.html %}
