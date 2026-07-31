---
title: 'Solutio: Summa numerorum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub sum-digits($n) {
    $n < 10 ?? $n !! $n % 10 + sum-digits($n div 10);
}

say sum-digits(1234);
```

🦋 Inveni codicem fontem in archivo [sum-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/sum-digits.raku).

## Exitus

```
10
```

## Commentarii

1. Casus fundamentalis est numerus unius cifrae, qui ipse sua cifrarum summa est.

1. Aliter `$n % 10` ultima cifra est et `$n div 10` eam demit; `1 + 2 + 3 + 4` est `10`.

{% include nav.html %}
