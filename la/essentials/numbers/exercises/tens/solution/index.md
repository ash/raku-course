---
title: Solutio ad ‘Numerus denariorum’
---

{% include menu.html %}

Hoc modo potes hanc quaestionem solvere.

## Codex

```raku
my $n = prompt 'Intra numerum integrum positivum: ';

dic ($n % 100) div 10;
```

🦋 Totum codicem invenire potes in fasciculo [tens.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/tens.raku).

## Output

Programma exsequi et pauca diversa casus probare:

* Numerus rotundus trium digitorum ut 120;
* Multiplex centum, exempli gratia, 400;
* Numerus qui maior est quam 10 sed minor quam 100.
* Numerus minor quam 10.

Pro numero 234, output programmatis sic videtur:

```console
$ raku exercises/numbers/tens.raku
Intra numerum integrum positivum: 234
3
```

## Commentarii

In hac solutione, combinatio moduli `%` et divisionis integrae `div` iterum adhibetur.

Nota spatium ante parenthesin apertam. Illud ibi esse debet; aliter, errorem syntacticum accipies. Ad hunc aspectum [revertamur](/la/essentials/more-on-functions/mind-the-space) Raku in sectione de functionibus, sed nunc, codicem ut supra scriptum typa vel alterum par parenthesium ad argumentum functionis circumdandum adde — in hoc casu, nullum spatium necessarium est:

```raku
    dic(($n % 100) div 10);
```

{% include nav.html %}