---
title: 'Solvo: Divido per subtraho'
---

{% include menu.html %}

La divido estas ripetita subtraho. La programo havas `while` buklon kiu reduktas `$a` per la valoro de `$b` kaj ripetas ĝin dum la nuna valoro de `$a` ne estas malpli ol `$b`. La variablo `$n` kalkulas la nombron de iteracioj, kaj ĝi estas ankaŭ la rezulto kiun ni bezonas.

## Kodo

Jen la plena programo:

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

🦋 Trovu la programon en la dosiero [division-via-subtraction.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/division-via-subtraction.raku).

## Eligo

Rulu la programon kelkajn fojojn. Komencu kun la donitaj valoroj kiuj donas ĝustan entjeron:

```console
$ raku exercises/loops/division-via-subtraction.raku
7
```

Ankaŭ provu, ekzemple, ŝanĝi `$b` al `20` kaj konfirmu ke la rezulto estas ĝusta:

```console
$ raku exercises/loops/division-via-subtraction.raku
8
```

{% include nav.html %}