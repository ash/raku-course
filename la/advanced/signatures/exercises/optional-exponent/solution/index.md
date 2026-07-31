---
title: 'Solutio: Optionalis exponentis'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub power($base, $exp?) {
    $base ** ($exp // 2)
}

say power(5);
say power(5, 3);
```

🦋 Inveni codicem fontem in archivo [optional-exponent.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/optional-exponent.raku).

## Exitus

```
25
125
```

## Commentarii

1. Signum `?` post `$exp` eum optionalem reddit, itaque `power` sola basi vocari potest.

1. Cum `$exp` omittitur, indefinitus est, et `//` subsidium `2` praebet, itaque `power(5)` basim ad quadratum elevat, `25`. Exponente dato, ut in `power(5, 3)`, ille valor adhibetur, unde `125`.

{% include nav.html %}
