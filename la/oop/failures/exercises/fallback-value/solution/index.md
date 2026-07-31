---
title: 'Solutio: Valor subsidiarius'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub get($x) {
    fail 'bad' if $x == 0;
    return $x;
}

say get(5) // 'default';
say get(0) // 'default';
```

🦋 Inveni codicem fontem in archivo [fallback-value.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/fallback-value.raku).

## Exitus

```
5
default
```

## Commentarii

1. `get(5)` `5` more solito reddit, itaque `//` illud servat.

1. `get(0)` `Failure` indefinitum reddit, itaque `//` ad `'default'` recurrit. Quia `Failure` indefinitum est, `//` illud tacite tractat, sine iactu.

{% include nav.html %}
