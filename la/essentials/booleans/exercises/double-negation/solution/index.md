---
title: 'Solutio: Duplex negatio'
---

{% include menu.html %}

Extendamus programmatum ad solvendum secundam partem exercitationis et reusemus eandem variabilem:

## Codex

```raku
my $valor = False;
say !!$valor;

$valor = True;
say !!$valor;
```

🦋 Plenum codicem invenire potes in archivo [double-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/booleans/double-negation.raku).

## Commentarii

Antequam programmatum currimus, cogitemus quid imprimet. Sunt duo operatoria negationis ante variabilem. Agunt ut duo operatoria negationis. In primo casu, valor vertitur a `False` ad `True`, et deinde statim vertitur retro a `True` ad `False`. In secundo casu, algorithmus idem est: post duas negationes, obtinemus initialem valorem Booleanum.

## Exitus

Programma sequens output imprimit, quod confirmat considerationes supra:

```console
$ raku exercises/booleans/double-negation.raku
Falsum
Verum
```

{% include nav.html %}