---
title: Solutio ad ‘Class desks’
---

{% include menu.html %}

Solutio ad problema infra ostenditur.

## Codex

```raku
my $students = 23;

my $desks = $students div 2 + $students % 2;

say "$desks desks must be bought.";
```

🦋 Codicem plenum invenire potes in archivo [class-desks.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/class-desks.raku).

## Output

Programma bis saltem currere tenta cum numero discipulorum pari et impari. Exempli gratia, pro numeris input `23` et `24`, programma eundem eventum imprimit:

```console
$ raku exercises/numbers/class-desks.raku
12 desks must be bought.
```

## Commentarii

Non satis est solum numerum discipulorum per duo dividere. Interest tractare numeros pares et impares. Una ex solutionibus possibilibus ad numerum rotundum: `$students div 2 + $students % 2`. Cum numerus discipulorum par est, secunda pars nulla est, et eventus aequalis est dimidio numeri discipulorum. Sed cum numerus discipulorum impar est, prima pars adhuc numerus integer est propter `div` pro `/`, et secunda pars expressionis addit extra mensam.

{% include nav.html %}