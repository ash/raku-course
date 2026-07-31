---
title: 'Solutio: Unus numerus, tres bases'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $n = 255;

say $n.base(2);
say $n.base(8);
say $n.base(16);
```

🦋 Inveni codicem fontem in archivo [number-bases.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/number-bases.raku).

## Exitus

```
11111111
377
FF
```

## Commentarii

1. Methodus `.base` numerum integrum in qualibet basi a 2 ad 36 reddit, catenam
reddens. `255` est `11111111` binarie et `FF` sedecimalie — valor maximus
qui in uno byte capit.

{% include nav.html %}
