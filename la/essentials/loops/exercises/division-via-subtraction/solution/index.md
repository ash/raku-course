---
title: 'Solutio: Divisio per subtractionem'
---

{% include menu.html %}

Divisio est subtractio repetita. Programma habet `while` loop quod minuit `$a` per valorem `$b` et repetit dum valor currentis `$a` non est minor quam `$b`. Variabilis `$n` numerat iterationes, et etiam est resultat quod nobis opus est.

## Codex

Hic est totum programma:

```raku
my $a = 175;
my $b = 25;

my $n = 0;
while $a >= $b {
    $a -= $b;
    $n++;
}

say $n;
```

🦋 Inveni programma in archivo [division-via-subtraction.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/division-via-subtraction.raku).

## Output

Curre programma aliquot vicibus. Incipe cum valoribus datis quae dant exactum numerum integrum:

```console
$ raku exercises/loops/division-via-subtraction.raku
7
```

Etiam tenta, exempli gratia, mutare `$b` ad `20` et confirma quod resultat rectum est:

```console
$ raku exercises/loops/division-via-subtraction.raku
8
```

{% include nav.html %}