---
title: Valorem assignare
---

{% include menu.html %}

Utere operatore `=` ut novum valorem in continens scalaris ponas.

```raku
my $nomen;
$nomen = 'Anna';
```

Nunc variabile uti potes et, exempli gratia, illud imprimere:

```raku
dic $nomen;
```

## Multiplices assignationes

Multiplices variabiles simul assignari possunt. Exempli gratia, hoc modo duo scalaria in uno enuntiatione assignantur:

```raku
my ($a, $b);
($a, $b) = 10, 20;
```

Nota quod parenthesin in latere sinistro omittere non potes. Sed eas ad symmetriam in latere dextro addere potes:

```raku
($a, $b) = (10, 20);
```

{% include nav.html %}