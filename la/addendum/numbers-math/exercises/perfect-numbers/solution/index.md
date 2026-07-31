---
title: 'Solutio: Numeri perfecti'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @perfect = (1..30).grep: -> $n {
    $n == [+] (1..^$n).grep($n %% *)
};

say @perfect;
```

🦋 Inveni codicem fontem in archivo [perfect-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/perfect-numbers.raku).

## Exitus

```
[6 28]
```

## Commentarii

1. `(1..^$n).grep($n %% *)` numeros infra `$n` servat qui illum aequaliter dividunt —
divisores eius proprios. `%% *` functio Whatever est quae divisibilitatem probat.

1. `[+]` illos divisores summat, et `grep` externum solos numeros servat qui illi
summae aequant.

{% include nav.html %}
