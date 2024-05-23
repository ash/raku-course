---
title: Solutio de ‘Veris et Falsis integri’
---

{% include menu.html %}

Ut numerum ad valorem Booleanum convertas, potes uti vel operatore praefixo `?` vel forma constructoris, vel vocare methodum `Bool`, vel rutam `so` ut vel operator praefixus vel methodus:

```raku
my $value = 42;
say ?$value;
say Bool($value);
say $value.Bool;
say so $value;
say $value.so;
```

Manifestum est valores non-nullos converti ad `Verum`. Itaque maxime interest spectare ad eas optiones quae fiunt `Falsum`.

Omnes nullae, integer, punctum-fluctuans, vel rationalis, convertuntur ad `Falsum`:

```raku
my Int $int-zero = 0;
say ?$int-zero; # Falsum

my Rat $rat-zero = 0.0;
say ?$rat-zero; # Falsum

my Num $num-zero = 0e0;
say ?$num-zero; # Falsum
```

Certe, nihil mutatur si numerum prius negare conaris:

```raku
my $int = 0;
say ?(-$int); # Falsum
```

🦋 Totum programma cum exemplo supra invenire potes in archivo [true-false-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/coercion/true-false-numbers.raku).

{% include nav.html %}