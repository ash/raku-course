---
title: 'Solutio: Gradus Collatz'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $n = 27;
my $steps = 0;

while $n != 1 {
    $n = $n %% 2 ?? $n div 2 !! 3 * $n + 1;
    $steps++;
}

say $steps;
```

🦋 Inveni codicem fontem in archivo [collatz.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/collatz.raku).

## Exitus

```
111
```

## Commentarii

1. Ternarium `?? !!` valorem sequentem una expressione eligit: dimidia `$n` cum
par est (`$n %% 2`), alioquin `3 * $n + 1` applica.

1. `27` casus parvus clarus est qui ambitum mire longum sumit — `111` gradus —
antequam tandem ad `1` consistat.

{% include nav.html %}
