---
title: Variabiles typatae
---

{% include menu.html %}

In Raku, variabile scalare (vel, continens scalare) potest unum obiectum diversorum generum continere. Exempli gratia, eadem variabile primo numerum continere potest, deinde stringam:

```raku
my $var = 42;
$var = 'Salve';
```

Hic est alius exemplum miscendi diversa genera datae in eadem expressione:

```raku
my $a = '100';
my $b = 200;
dic $a + $b; # 300
```

Hoc est, probabiliter, non optima praxis codicis, sed est perfecte valida programma Raku.

Tamen, Raku permittit te specificare quid data variabile continere possit. Plura sunt in argumentis infra.

{% include nav.html %}