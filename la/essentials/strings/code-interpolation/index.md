---
title: Code interpolation in Raku strings
---

{% include menu.html %}

Proximum interpolationis gradum est interpolationis codicis. Permittit te habere simplicem (et etiam complexum!) codicem directe intra stringam duplici-quotatione.

Interpolatus codex inter uncis curvis ponitur:

```raku
my $a = 10;
my $b = 20;
say "Summa $a et $b est {$a + $b}.";
```

Programma imprimit:

```console
$ raku t.raku 
Summa 10 et 20 est 30.
```

## Variabiles iterum

Una ex applicationibus huius methodi est adiuvare ad disambiguandum situationes ubi variabilis sequenda est a textu qui perperam intellegi potest tamquam continuatio nominis variabilis. Ad hoc praecavendum, utere uncis curvis ad variabilem includendam:

```raku
my $how-many = 5;
my $what = 'suit';
say "Sunt $how-many {$what}s."; # Sunt 5 suits.
```

Sine uncis curvis, Raku conaretur interpolare variabilem non-existentem `$whats`.

{% include nav.html %}