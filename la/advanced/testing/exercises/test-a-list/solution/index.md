---
title: 'Solutio: Duas comprobationes planificare'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
use Test;

plan 2;

my @sorted = (3, 1, 2).sort;
is-deeply @sorted, [1, 2, 3], 'sorted';

is 10 % 3, 1, 'remainder';
```

🦋 Inveni codicem fontem in archivo [test-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/test-a-list.raku).

## Exitus

```
1..2
ok 1 - sorted
ok 2 - remainder
```

## Commentarii

1. `plan 2` numerum declarat antequam ulla probatio currat, itaque linea `1..2` prima apparet. Si archivum deinde alium numerum probationum curreret, series ut deficiens nuntiaretur — custodia quam `done-testing` dare non potest.

1. `is-deeply` duas series de aequalitate exacta, generis conscia, comparat. Series `3, 1, 2` ordinata dat `1, 2, 3`, quod convenit.

1. `is` duos valores de aequalitate simplici comparat et utrumque in defectu nuntiat. Hic `10 % 3` est `1`, quod valori exspectato convenit, itaque probatio secunda quoque transit.

{% include nav.html %}
