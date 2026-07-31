---
title: 'Solutio: Elementum vel lista'
---

{% include menu.html %}

Hic est possibilis solutio huius exercitii.

## Codex

```raku
my @a = 1, 2, 3;
my $count = 0;

my $x = $(@a);
$count++ for @($x);
say $count;
```

🦋 Inveni codicem fontem in archivo [item-or-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/contexts/item-or-list.raku).

## Exitus

```
3
```

## Commentarii

1. `my $x = $(@a)` contextum item cogit, itaque totus ordo in unum scalarem `$x` componitur potius quam expanditur.

1. `@($x)` deinde contextum listae cogit, `$x` in tria elementa sua iterum expandens. Ansa `for` igitur ter currit, numeratorem ad `3` relinquens. Duo contextualisers exacte contrarii sunt: `$( )` listam in unum item componit, `@( )` eam iterum expandit.

{% include nav.html %}
