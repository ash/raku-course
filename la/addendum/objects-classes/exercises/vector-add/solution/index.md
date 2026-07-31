---
title: 'Solutio: Vectores addere'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class Vector {
    has $.x;
    has $.y;

    method add(Vector $v) {
        Vector.new(x => $.x + $v.x, y => $.y + $v.y);
    }

    method Str { "($.x, $.y)" }
}

my $sum = Vector.new(x => 1, y => 2).add(Vector.new(x => 3, y => 4));

put $sum;
```

🦋 Inveni codicem fontem in archivo [vector-add.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/vector-add.raku).

## Exitus

```
(4, 6)
```

## Commentarii

1. `add` neutrum vectorem mutat; `Vector` prorsus novum ex componentibus summatis
construit et reddit.

1. Nota `Vector` *intra definitionem suam propriam* adhiberi — ut genus parametri
`Vector $v` et in `Vector.new`. Hoc prorsus rectum est: nomen generis
ex illo momento quo declaratio eius incipit notum est, itaque classis libere ad se ipsam
in methodis propriis referre potest. Nulla declaratione praevia opus est.

1. `put` argumentum suum per methodum `Str` in catenam vertit, itaque forma propria
`"($.x, $.y)"` est id quod apparet.

{% include nav.html %}
