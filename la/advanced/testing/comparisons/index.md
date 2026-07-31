---
title: Comparationes et consilia
translations_gpt:
---

{% include menu.html %}

Praeter `ok` et `is`, modulus `Test` comparationes pro diversis generibus valorum habet. Utilissimae sunt:

* `is` — duos valores de aequalitate comparat (ut chordas vel numeros)
* `is-deeply` — duas structuras datorum de aequalitate exacta, generis conscia, comparat
* `like` — verificat chordam expressioni regulari respondere
* `isnt` — transit cum duo valores **non** aequales sunt

`is-deeply` est electio recta pro ordinibus, mappis et datis nidificatis, quia structuram et genus accurate comparat:

```raku
use Test;

my @reversed = (1, 2, 3).reverse;
is-deeply @reversed, [3, 2, 1], 'reversed';

done-testing;
```

Hoc imprimit:

```
ok 1 - reversed
1..1
```

Ubi `is` in chordas verteret et laxe compararet, `is-deeply` postulat ut structurae vere conveniant. Nota `done-testing` consilium `1..1` in fine ponere, post probationem.

Loco eo quod `done-testing` probationes pro te numeret, numerum ante per `plan` declarare potes. Hoc contra archivum probationum quod mature exit probationesque tacite praetermittit custodit:

```raku
use Test;

plan 2;
ok True,  'first';
ok 1 < 2, 'second';
```

Hac vice consilium **primum** venit, ante effectus:

```
1..2
ok 1 - first
ok 2 - second
```

Haec est differentia manifesta a `done-testing`: `plan` numerum `1..2` in summo imprimit, antequam ullae probationes currant, dum `done-testing` eum in ipso fine imprimit. Utroque modo, cum `plan 2` cursus exacte duas probationes exspectat; si pauciores (vel plures) revera currunt, series ut deficiens nuntiatur. Utere `plan` cum numerus fixus et notus est, et `done-testing` cum facilius est sinere ut compages numeret.

{% include nav.html %}
