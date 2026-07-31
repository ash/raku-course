---
title: 'Solutio: Summa numerorum per recursionem'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub digit-sum($n) {
    return $n if $n < 10;
    return $n % 10 + digit-sum($n div 10);
}

say digit-sum(12345);
```

🦋 Inveni codicem fontem in archivo [recursive-digit-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/recursive-digit-sum.raku).

## Exitus

```
15
```

## Commentarii

1. Casus fundamentalis numerus unius cifrae est, qui summa cifrarum sua propria est. Alioquin
subprogramma cifram ultimam per `$n % 10` detrahit et in reliquo recurrit,
`$n div 10`.

{% include nav.html %}
