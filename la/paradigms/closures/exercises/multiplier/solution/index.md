---
title: 'Solutio: Multiplicator'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub multiplier($factor) {
    -> $x { $x * $factor };
}

my &triple = multiplier(3);
say triple(4);
```

🦋 Inveni codicem fontem in archivo [multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/multiplier.raku).

## Exitus

```
12
```

## Commentarii

1. Blocus cuspidatus redditus super `$factor` clauditur, meminens illum esse `3`.

1. Illum cum `4` vocans `12` accipis.

{% include nav.html %}
