---
title: 'Solutio: Whatever duobus argumentis'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $join = * ~ '-' ~ *;

say $join('a', 'b');
```

🦋 Inveni codicem fontem in archivo [two-arg-whatever.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/two-arg-whatever.raku).

## Exitus

```
a-b
```

## Commentarii

1. Expressio duas stellas continet, itaque Raku `WhateverCode` aedificat quod duo argumenta accipit — prima stella est primum argumentum, secunda stella secundum.

1. Vocatio `$join('a', 'b')` stellas ordine implet, unde `'a' ~ '-' ~ 'b'`, id est `a-b`.

{% include nav.html %}
