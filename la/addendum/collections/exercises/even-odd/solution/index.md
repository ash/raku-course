---
title: 'Solutio: In pares et impares divide'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @numbers = 1..10;

my @even = @numbers.grep(* %% 2);
my @odd  = @numbers.grep(* % 2);

say "even: @even[]";
say "odd: @odd[]";
```

🦋 Inveni codicem fontem in archivo [even-odd.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/even-odd.raku).

## Exitus

```
even: 2 4 6 8 10
odd: 1 3 5 7 9
```

## Commentarii

1. `* %% 2` verum est pro numeris per duo divisibilibus; `* % 2` verum est cum
reliquum non nihil est, id est impar. Unumquodque `grep` unum gregem servat.

1. `@even[]` cum sectione zen uncorum vacuorum interponere elementa
spatiis separata intra catenam duplicibus virgulis notatam imprimit.

{% include nav.html %}
