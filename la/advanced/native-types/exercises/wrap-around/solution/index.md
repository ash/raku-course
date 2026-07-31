---
title: 'Solutio: Circumvolvere'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
my uint8 $u = 250;
$u += 10;
say $u;

my uint8 $v = 0;
$v--;
say $v;
```

🦋 Inveni codicem fontem in archivo [wrap-around.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/wrap-around.raku).

## Exitus

```
4
255
```

## Commentarii

1. `uint8` ab `0` ad `255` extenditur, quod est 256 valores distincti. Arithmetica in eo effecte modulo 256 fit.

1. `250 + 10` esset `260`, quod non capit. Circumvolvitur, deveniens `260 - 256 = 4` ultra imum. Itaque superfluxus non limitatur ad unum gradum ultra summum — quilibet eventus extra ambitum retro plicatur.

1. In alteram partem quoque superfluit: decrementum `0` non potest `-1` dare in typo non signato, itaque ad maximum, `255`, circumvolvitur.

{% include nav.html %}
