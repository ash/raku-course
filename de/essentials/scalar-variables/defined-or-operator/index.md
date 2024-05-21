---
title: Der Defined-Or-Operator
---

{% include menu.html %}

Verwenden Sie den sogenannten _defined-or_ Operator `//`, um einen Fallback-Wert zu erhalten, falls eine Variable noch nicht gesetzt ist.

```raku
my $a = 'alpha';
say $a // 'gamma';

my $b;
say $b // 'delta';
```

Dieses Programm gibt aus:

```
alpha
delta
```

Der Wert von `$a` wird in der ersten Zeile gesetzt, daher wird im Ausdruck `$a // 'gamma'` der aktuelle Wert von `$a` verwendet. Im Gegensatz dazu wurde die Variable `$b` nicht initialisiert, daher gibt `$b // 'delta'` den rechten Operanden zurück und das Programm gibt `delta` aus.

## //=

Die Kombination von `//` und `=` ergibt den `//=` Operator, der einen Wert zuweist, wenn die Variable nicht definiert ist.

```raku
my $x;
$x //= 42;
say $x; # 42
```

{% include nav.html %}