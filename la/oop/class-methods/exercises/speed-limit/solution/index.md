---
title: 'Solutio: Formula in classe'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class Geometry {
    method circle-area($r) {
        (π * $r * $r).round
    }
}

say Geometry.circle-area(10);
```

🦋 Inveni codicem fontem in archivo [speed-limit.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/speed-limit.raku).

## Exitus

```
314
```

## Commentarii

1. Methodus nullum attributum tangit — solum cum parametro suo `$r` operatur — itaque in ipsa classe vocari potest, nullo obiecto prius creato.

1. `Geometry.circle-area(10)` methodum in obiecto generis vocat, `10` tradens. Effectus est `π * 10 * 10`, et post rotundationem `314`.

{% include nav.html %}
