---
title: 'Solutio: Numerator'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub make-counter($step) {
    my $n = 0;
    return sub { $n += $step };
}

my &count = make-counter(10);
say count();
say count();
say count();
```

🦋 Inveni codicem fontem in archivo [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/counter.raku).

## Exitus

```
10
20
30
```

## Commentarii

1. Clausura duo ex `make-counter` capit: parametrum `$step` et variabilem privatam `$n`. Utraque viva manent postquam `make-counter` redit.

1. Unaquaeque vocatio `$step` ad `$n` addit et novam summam reddit. Numerator cum gradu alio aedificatus illo spatio promoveret.

{% include nav.html %}
