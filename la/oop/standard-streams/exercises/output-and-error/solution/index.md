---
title: 'Solutio: Exitus et errores'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @data = 3, 5, 7;

my $sum = 0;
for @data -> $n {
    $sum += $n;
    $*ERR.say("running total: $sum");
}

$*OUT.say($sum);
```

🦋 Inveni codicem fontem in archivo [output-and-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/output-and-error.raku).

## Exitus

In screen utrumque fluentum apparet — summae currentes, deinde effectus finalis:

```
running total: 3
running total: 8
running total: 15
15
```

Si error vulgaris abicitur, solus verus exitus manet:

```
$ raku output-and-error.raku 2>/dev/null
15
```

## Commentarii

1. `$*OUT` et `$*ERR` sunt tractabula exitus vulgaris et erroris vulgaris. Utrumque propriam methodum `say` habet.

1. Unusquisque anuli transitus numerum sequentem addit et summam currentem ad `$*ERR` scribit; sola summa finalis ad `$*OUT` it. In screen progressus et effectus similes videntur, sed per diversa fluenta iter faciunt — quapropter errorem vulgarem per `2>/dev/null` avertens solum finale `15` relinquis.

{% include nav.html %}
