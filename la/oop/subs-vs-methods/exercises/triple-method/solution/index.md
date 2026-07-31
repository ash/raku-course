---
title: 'Solutio: Triplicatio ut methodus'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class Number {
    has $.n;

    method triple {
        $.n * 3;
    }
}

say Number.new(n => 7).triple;
```

🦋 Inveni codicem fontem in archivo [triple-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-method.raku).

## Exitus

```
21
```

## Commentarii

1. Ut methodus, `triple` ad obiectum pertinet et cum proprio obiecti `n` operatur — nihil traditur.

1. Comparata cum versione subprogrammatis, data in obiecto habitant loco eius quod ut argumentum adveniunt. Utraque `21` dat.

{% include nav.html %}
