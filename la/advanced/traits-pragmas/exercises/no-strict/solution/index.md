---
title: 'Solutio: Strictum relaxare'
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
no strict;

$a = 10;
$b = 20;
say $a + $b;
```

🦋 Inveni codicem fontem in archivo [no-strict.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/no-strict.raku).

## Exitus

```
30
```

## Commentarii

1. `no strict` requisitum deactivat ut variabiles declarentur, itaque `$a` et `$b` sine `my` assignari possunt. Sub defectu `strict`, quaeque illarum linearum error tempore compilationis esset.

1. Post assignationem, variabiles normaliter se gerunt, itaque `$a + $b` est `30`. Relaxatio lexicalis est — tantum ad finem ambitus ubi `no strict` apparet durat.

1. Haec demonstratio est, non praxis commendanda: `strict` ex defectu activum est bona ratione — errores typographicos in nominibus variabilium tempore compilationis deprehendit. In codice reali, activum serva et variabiles tuas cum `my` declara.

{% include nav.html %}
