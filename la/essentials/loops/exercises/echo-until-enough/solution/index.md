---
title: 'Solutio: Echo usque satis'
---

{% include menu.html %}

Hic programma requirit ansam quae sistitur cum usor verbum praedefinitum inserit.

## Codex

Sunt plures similes modi ad operandum cum `while`, `until`, vel `repeat`. Unus ex illis infra monstratur.

```raku
my $verbum;
repeat {
    $verbum = prompt 'Tuum verbum: ';
    say $verbum;
} while $verbum ne 'satis';

say 'OK, confectum.';
```

🦋 Inveni codicem fontem in archivo [echo-usque-satis.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/echo-until-enough.raku).

## Exitus

Curre programma, inserere pauca verba diversa, et deinde ansam terminare.

```console
$ raku exercises/loops/echo-usque-satis.raku
Tuum verbum: hoc
hoc
Tuum verbum: est
est
Tuum verbum: meum
meum
Tuum verbum: verbum
verbum
Tuum verbum: satis
satis
OK, confectum.
```

## Commentarium

Nota quod variabilem `$verbum` declaras _ante_ ansam, quia probatio `while` extra ambitum corporis ansae sita est. Si variabilis intra ansam definita est, non erit visibilis in probatione.

{% include nav.html %}