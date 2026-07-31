---
title: 'Solutio: Radix digitalis'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $n = 987654;

while $n >= 10 {
    $n = [+] $n.comb;
}

say $n;
```

🦋 Inveni codicem fontem in archivo [digital-root.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/digital-root.raku).

## Exitus

```
3
```

## Commentarii

1. `$n.comb` numerum in singula signa cifrarum dividit; `[+]` ea addit, catenas
automatice in numeros vertens.

1. Anulus repetit dum effectus adhuc plus quam unam cifram habet, itaque consistit
simul atque `$n` infra `10` cadit.

{% include nav.html %}
