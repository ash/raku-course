---
title: 'Solutio: Duo fila'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my ($x, $y);
my $a = Thread.start({ $x = 10 * 10 });
my $b = Thread.start({ $y = 20 * 20 });
$a.finish;
$b.finish;
say $x + $y;
```

🦋 Inveni codicem fontem in archivo [two-threads.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/two-threads.raku).

## Exitus

```
500
```

## Commentarii

1. Duo fila simul currunt, unumquodque effectum suum in propriam variabilem communem scribens.

1. `$x` et `$y` legere solum **post** utramque vocationem `.finish` fit, itaque effectus certo parati sunt: `100 + 400` est `500`. Coniungere ante legere est id quod valorem fidum reddit.

{% include nav.html %}
