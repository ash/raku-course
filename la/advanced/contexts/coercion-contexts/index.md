---
title: Numericus, catenarius, et Booleanus contextus
---

{% include menu.html %}

Tres contextus frequentissimi valorem postulant ut se gerat tamquam numerus, chorda, vel valor Booleanus. Quisque habet operatorem praefixum qui id expresse cogit:

* `+` — contextus numericus
* `~` — contextus chordae
* `?` — contextus Booleanus

Ad ordinem applicati, dant eius longitudinem, eius elementa spatiis coniuncta, et utrum elementa habeat:

```raku
my @a = 1, 2, 3;

say +@a; # 3
say ~@a; # 1 2 3
say ?@a; # True
```

Ordo vacuus est `0` in contextu numerico et `False` in contextu Booleano:

```raku
my @empty;
say +@empty; # 0
say ?@empty; # False
```

Non semper necesse est hos operatores manu scribere, quia lingua rectum contextum pro te imponere potest. Arithmetica operandos suos in contextum numericum ponit, concatenatio eos in contextum chordae ponit, et `if`, `while`, et `and`/`or` condicionem suam in contextum Booleanum ponunt:

```raku
my @a = 1, 2, 3;

say 10 + @a;              # 13, here @a is its length: 3
say 'items: ' ~ @a;       # items: 1 2 3
if @a { say 'not empty' } # not empty
```

Itaque `if @array { … }` exacte ita operatur ut speres: ordo non vacuus verus est. Operatores praefixi sunt modus expressus easdem coercitiones postulandi.

In combinatione cum postfixo `if`, hoc sinit codicem vere expressum creare:

```raku
say "{+@a} items are there" if @a; # 3 items are there
```

{% include nav.html %}
