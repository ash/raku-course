---
title: Kongruado kontraŭ intervalo
---

{% include menu.html %}

Prenu intervalon kaj variablon kun entjera valoro en ĝi:

```raku
my $r = 1..10;
my $v = 7;
```

Uzante la _inteligentan kongruan operatoron_ `~~`, vi povas kontroli ĉu la valoro estas ene de la intervalo:

```
say $v ~~ $r;
```

En la montrita ekzemplo, la kondiĉo estas `True`, do la programo presas `True`.

{% include nav.html %}