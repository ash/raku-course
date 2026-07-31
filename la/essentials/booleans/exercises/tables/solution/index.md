---
title: 'Solutio: Booleana tabulae'
---

{% include menu.html %}

Hic est programma possibile quod omnes eventus operationum Booleanarum imprimit.

## Codex

```raku
say 'Verum && Verum est ', True && True; 
say 'Verum && Falsum est ', True && False;
say 'Falsum && Verum est ', False && True;
say 'Falsum && Falsum est ', False && False;

say 'Verum || Verum est ', True || True; 
say 'Verum || Falsum est ', True || False;
say 'Falsum || Verum est ', False || True;
say 'Falsum || Falsum est ', False || False;

say 'Verum ^^ Verum est ', True ^^ True; 
say 'Verum ^^ Falsum est ', True ^^ False;
say 'Falsum ^^ Verum est ', False ^^ True;
say 'Falsum ^^ Falsum est ', False ^^ False;
```

🦋 Totum codicem invenire potes in archivo [tables.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/booleans/tables.raku).

## Exitus

Programma exsequere, et haec tabula imprimitur.

```console
$ raku tables.raku
Verum && Verum est Verum
Verum && Falsum est Falsum
Falsum && Verum est Falsum
Falsum && Falsum est Falsum
Verum || Verum est Verum
Verum || Falsum est Verum
Falsum || Verum est Verum
Falsum || Falsum est Falsum
Verum ^^ Verum est Nil
Verum ^^ Falsum est Verum
Falsum ^^ Verum est Verum
Falsum ^^ Falsum est Falsum
```

## Commentarii

Nota quod propter maiorem praecedentiam operationum Booleanarum, non opus est eas in parenthesibus ponere. Hoc tamen non valet si concatenationem chordarum uteris:

```raku
say 'Verum && Verum est ' ~ (True && True);
```

Vel, uti potes [interpolatione codicis](/la/essentials/strings/code-interpolation).

{% include nav.html %}