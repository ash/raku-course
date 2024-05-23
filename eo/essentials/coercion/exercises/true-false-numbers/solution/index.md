---
title: Solvo de ‘Veraj kaj Falsaj entjeroj’
---

{% include menu.html %}

Por konverti numeron al Boolea valoro, vi povas uzi aŭ la prefiksan operatoron `?` aŭ konstruan formon, aŭ voki la metodon `Bool`, aŭ la rutinon `so` kiel prefiksan operatoron aŭ metodon:

```raku
my $value = 42;
say ?$value;
say Bool($value);
say $value.Bool;
say so $value;
say $value.so;
```

Estas sufiĉe evidente, ke ne-nulaj valoroj estas konvertitaj al `True`. Ni do plej interesas rigardi tiujn opciojn, kiuj fariĝas `False`.

Ĉiuj nuloj, entjeraj, komaj, aŭ raciaj, estas konvertitaj al `False`:

```raku
my Int $int-zero = 0;
say ?$int-zero; # False

my Rat $rat-zero = 0.0;
say ?$rat-zero; # False

my Num $num-zero = 0e0;
say ?$num-zero; # False
```

Kompreneble, nenio ŝanĝiĝas se vi provas unue nei la numeron:

```raku
my $int = 0;
say ?(-$int); # False
```

🦋 Vi povas trovi la plenan programon kun la supra ekzemplo en la dosiero [true-false-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/coercion/true-false-numbers.raku).

{% include nav.html %}