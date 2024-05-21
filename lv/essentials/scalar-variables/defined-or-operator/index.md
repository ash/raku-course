---
title: Definētais-vai operators
---

{% include menu.html %}

Izmantojiet tā saukto _definētais-vai_ operatoru `//`, lai iegūtu rezerves vērtību, ja mainīgais vēl nav iestatīts.

```raku
my $a = 'alpha';
say $a // 'gamma';

my $b;
say $b // 'delta';
```

Šī programma izdrukā:

```
alpha
delta
```

Mainīgā `$a` vērtība ir iestatīta pirmajā rindā, tāpēc izteiksmē `$a // 'gamma'` tiek izmantota pašreizējā `$a` vērtība. Savukārt mainīgais `$b` netika inicializēts, tāpēc `$b // 'delta'` atgriež labo pusi, un programma izdrukā `delta`.

## //=

Kombinācija `//` un `=` veido operatoru `//=`, kas piešķir vērtību, ja mainīgais nav definēts.

```raku
my $x;
$x //= 42;
say $x; # 42
```

{% include nav.html %}