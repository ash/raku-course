---
title: Solutio ad 'Duplicem Negationem'
---

{% include menu.html %}

Extendamus programmatum ad solvendum secundam partem exercitationis et reusemus eandem variabilem:

## Codex

```raku
meum $valor = Falsum;
dic !!$valor;

$valor = Verum;
dic !!$valor;
```

🦋 Plenum codicem invenire potes in archivo [double-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/double-negation.raku).

## Commentarii

Antequam programmatum currimus, cogitemus quid imprimet. Sunt duo operatoria negationis ante variabilem. Agunt ut duo operatoria negationis. In primo casu, valor vertitur a `Falsum` ad `Verum`, et deinde statim vertitur retro a `Verum` ad `Falsum`. In secundo casu, algorithmus idem est: post duas negationes, obtinemus initialem valorem Booleanum.

## Output

Programma sequens output imprimit, quod confirmat considerationes supra:

```console
$ raku exercises/booleans/double-negation.raku
Falsum
Verum
```

{% include nav.html %}