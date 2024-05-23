---
title: 'Solutio: Valor e'
---

{% include menu.html %}

## Disclaimer

In Raku, est constans aedificata `e` quae dat responsum immediatum ad munus. Solutio infra monstrata ad educationem destinatur.

## Codex

Formula in hoc munere continet factorialem, et iam habemus saltem duas solutiones ad computandum (plures sequuntur). Programma infra definit duas functiones: unam ad computandum factorialem, alteram ad summam partialem secundum formulam.

Cum requiritur ut functio vocari possit sine argumentis, quo in casu currit numerum iterationum praedefinitum, addere possumus [valorem praedefinitum](/la/essentials/functions/default-values) parametri: `sub e-approx($max = 100)`.

In codice, nota similitudines in quomodo valores resultantes accumulantur in [postfix `for` loop](/la/essentials/loops/postfix-for) super [range](/la/essentials/ranges).

Hic est solutio:

```raku
sub factorial($n) {
    my $f = 1;
    $f *= $_ for 1..$n;

    return $f;
}

sub e-approx($max = 100) {
    my $e = 1;
    $e += 1 / factorial($_) for 1..$max;

    return $e;
}

say e-approx(10);
say e-approx();
```

🦋 Inveni programmatum in archivo [the-value-of-e.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/the-value-of-e.raku).

## Output

Cum 10 et 100 iterationibus, sequentes eventus accipimus. Insuper, tenta alios valores `$max`.

```console
$ raku exercises/functions/the-value-of-e.raku
2.7182818
2.718281828459045
```

{% include nav.html %}