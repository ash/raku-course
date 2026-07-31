---
title: 'Solutio: Reciprocum molle'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub reciprocal($n) {
    fail 'no reciprocal of zero' if $n == 0;
    return 1 / $n;
}

say reciprocal(4);
say reciprocal(0) // 'undefined';
```

🦋 Inveni codicem fontem in archivo [soft-divide.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/soft-divide.raku).

## Exitus

```
0.25
undefined
```

## Commentarii

1. `reciprocal(4)` `1 / 4`, id est `0.25`, more solito reddit.

1. `reciprocal(0)` `fail` vocat, itaque `Failure` reddit, quod indefinitum est. Operator `//` partem suam dexteram reddit quotiens pars sinistra indefinita est, itaque subsidium `undefined` accipimus.

1. `//` adhibere pro defectu tractato habetur: definitionem probat sine valore adhibito, itaque `Failure` mollis manet et numquam ut vera exceptio iacitur.

{% include nav.html %}
