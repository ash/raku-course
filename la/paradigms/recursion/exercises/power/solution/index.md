---
title: 'Solutio: Potentia'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub power($base, $exp) {
    $exp == 0 ?? 1 !! $base * power($base, $exp - 1);
}

say power(2, 10);
```

🦋 Inveni codicem fontem in archivo [power.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/power.raku).

## Exitus

```
1024
```

## Commentarii

1. Casus fundamentalis `1` reddit cum exponens ad `0` pervenit, quoniam quaelibet basis ad potentiam nullam unum est.

1. Gradus recursivus `$base` per `power($base, $exp - 1)` multiplicat, unum factorem singulis vicibus detrahens. Itaque `power(2, 10)` decem `2` simul multiplicat, dans `1024`.

{% include nav.html %}
