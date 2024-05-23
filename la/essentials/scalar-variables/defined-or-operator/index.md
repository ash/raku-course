---
title: Operator definitus-vel
---

{% include menu.html %}

Utere sic dicto _definitus-vel_ operatore `//` ut valorem subsidiarium accipias si variabilis nondum statuta est.

```raku
my $a = 'alpha';
say $a // 'gamma';

my $b;
say $b // 'delta';
```

Hoc programma imprimit:

```
alpha
delta
```

Valor `$a` statuitur in prima linea, ita in expressione `$a // 'gamma'`, valor praesens `$a` adhibetur. E contra, variabilis `$b` non initiata est, ergo `$b // 'delta'` operandum dextrum latus reddit, et programma `delta` imprimit.

## //=

Combinatio `//` et `=` dat operatorem `//=` qui valorem assignat si variabilis non definitur.

```raku
my $x;
$x //= 42;
say $x; # 42
```

{% include nav.html %}