---
title: Solutio ad ‘Summa numerorum ab 1 ad 100’
---

{% include menu.html %}

Ad summam numerorum integri ab 1 ad 100 computandam, certe possibile est omnes illos numeros in unam longam expressionem addere. Vel creare circulum (circulos in sectionibus posteris tractabimus). Sed optima solutio est uti bene nota [formula](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_⋯):

<div class="formula"><img src="sum.png" style="height: 3.5em; width: auto" /></div>

Cum formula, solutio fit satis trivialis.

## Codex

```raku
my $N = 100;
my $sum = $N * (1 + $N) / 2;
say "The sum of the numbers from 1 to $N is $sum.";
```

🦋 Plenum codicem invenire potes in archivo [sum1-100.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/sum1-100.raku).

## Output

```console
$ raku exercises/numbers/sum1-100.raku 
The sum of the numbers from 1 to 100 is 5050.
```

{% include nav.html %}