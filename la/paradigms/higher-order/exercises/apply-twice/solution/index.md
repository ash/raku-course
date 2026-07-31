---
title: 'Solutio: Bis applica'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub twice(&f, $x) {
    f(f($x));
}

say twice(* * 3, 2);
```

🦋 Inveni codicem fontem in archivo [apply-twice.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/apply-twice.raku).

## Exitus

```
18
```

## Commentarii

1. Parametrus `&f` subprogramma accipit; internum `f($x)` in externum `f(...)` funditur.

1. `2` triplicando `6` fit, et iterum triplicando `18`.

{% include nav.html %}
