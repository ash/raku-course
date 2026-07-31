---
title: Typus limitationes
---

{% include menu.html %}

In [parte Essentialium](/la/essentials/typed-variables/type-constraints/), vidisti quomodo typum variabilis per restrictionis typum ponere possis. Notandum est quod _continens_ est qui hanc restrictionem in valores quos accipere licet imponit.

Declaratio sequens continentem scalarem creat qui solum numeros integros hospites potest:

```raku
my Int $int;
```

Continens cum typo solum valores qui typo suo conveniunt accipit, itaque omnes assignationes sequentes validae sunt:

```raku
my Int $int;

$int = 123;       # directly an integer
say $int;

$int = 100 + 23;  # the result is an integer
say $int;

$int = '123'.Int; # a string converted to an integer
say $int;
```

Raku conversionem typorum automaticam in hoc casu non facit. Assignare numerum cum puncto decimali (qui est valor `Rat` in Raku) ergo non licet:

```raku
my Int $int;
$int = 123.45;
```

Errorem iam tempore compilationis accipis:

```
===SORRY!=== Error while compiling t.raku
Cannot assign a literal of type Rat (123.45) to a variable ($int) of
type Int.  You can declare the variable to be of type Real, or try to
coerce the value with 123.45.Int or Int(123.45), or just write the value
as 123.
at t.raku:2
------> <BOL>⏏$int = 123.45;
```

Ad errorem evitandum, valorem explicite converte:

```raku
my Int $int;

$int = 123.45.Int;
say $int; # 123
```

Ne confundaris duobus punctis in `123.45.Int`. Primum est punctum decimale; secundum methodum `Int` in valore rationali (`Rat`) vocat.

{% include nav.html %}
