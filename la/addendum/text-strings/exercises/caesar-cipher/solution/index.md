---
title: 'Solutio: Cifra Caesaris'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $text = 'HELLO';

$text ~~ tr/A..Z/D..ZA..C/;

say $text;
```

🦋 Inveni codicem fontem in archivo [caesar-cipher.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/caesar-cipher.raku).

## Exitus

```
KHOOR
```

## Commentarii

1. Operator transliterationis `tr///` signa ex prima copia in secundam mappat,
loco pro loco. `A..Z` contra `D..ZA..C` se componit, itaque `A` fit
`D`, `B` fit `E`, et cauda `X Y Z` ad `A B C` retro volvitur.

1. `tr///` catenam in loco mutat, itaque `$text` ipse verbum occultatum tenet
post congruentiam.

{% include nav.html %}
