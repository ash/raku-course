---
title: 'Solutio: Scalae digitales'
---

{% include menu.html %}

Programma duos gyros et duas amplitudines utitur.

## Codex

Hic est una ex solutionibus possibilibus:

```raku
my $size = prompt 'Magnitudinem inserere: ';

for 1..$size -> $n {
    .print for 1..$n;
    print "\n";
}
```

🦋 Invenies programmatum in archivo [digital-stairs.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/digital-stairs.raku).

## Effectus

Curre programmatum et magnitudinem structurae inserere:

```console
$ raku exercises/loops/digital-stairs.raku
Magnitudinem inserere: 7
1
12
123
1234
12345
123456
1234567
```

## Commentarium

Nota quomodo digitus currentis imprimatur:

```raku
.print for 1..$n;
```

Ut cum `say`, `print` ratio potest vocari ut methodus. In hoc casu, vocatur in [variabili thematis](/la/essentials/loops/topic) `$_`.

{% include nav.html %}