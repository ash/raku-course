---
title: 'Solutio: Hexadecimale in decimale'
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
my $n = :16<1A>;

say $n;
say $n.base(16);
```

🦋 Inveni codicem fontem in archivo [hex-to-decimal.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/hex-to-decimal.raku).

## Exitus

```
26
1A
```

## Commentarii

1. Forma radicis `:16<1A>` legit `1A` ut numerum basis 16, qui aequat `1 × 16 + 10 = 26`. Variabilis `$n` nunc integrum simplex continet.

1. `$n.base(16)` illum integrum retro in chordam basis 16 convertit, reddens `1A` iterum — confirmans quod legere basem et imprimere in basi operationes inversae sunt.

{% include nav.html %}
