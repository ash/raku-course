---
title: Solutio ad 'Tabulae Booleanae’
---

{% include menu.html %}

Hic est programma possibile quod omnes eventus operationum Booleanarum imprimit.

## Codex

```raku
dic 'Verum && Verum est ', Verum && Verum; 
dic 'Verum && Falsum est ', Verum && Falsum;
dic 'Falsum && Verum est ', Falsum && Verum;
dic 'Falsum && Falsum est ', Falsum && Falsum;

dic 'Verum || Verum est ', Verum || Verum; 
dic 'Verum || Falsum est ', Verum || Falsum;
dic 'Falsum || Verum est ', Falsum || Verum;
dic 'Falsum || Falsum est ', Falsum || Falsum;

dic 'Verum ^^ Verum est ', Verum ^^ Verum; 
dic 'Verum ^^ Falsum est ', Verum ^^ Falsum;
dic 'Falsum ^^ Verum est ', Falsum ^^ Verum;
dic 'Falsum ^^ Falsum est ', Falsum ^^ Falsum;
```

🦋 Totum codicem invenire potes in archivo [tables.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/tables.raku).

## Output

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
dic 'Verum && Verum est ' ~ (Verum && Verum);
```

Vel, uti potes [interpolatione codicis](/la/essentials/strings/code-interpolation).

{% include nav.html %}