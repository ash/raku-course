---
title: De defined-or operator
---

{% include menu.html %}

Gebruik de zogenaamde _defined-or_ operator `//` om een terugvalwaarde te krijgen als een variabele nog niet is ingesteld.

```raku
my $a = 'alpha';
say $a // 'gamma';

my $b;
say $b // 'delta';
```

Dit programma print:

```
alpha
delta
```

De waarde van `$a` is ingesteld in de eerste regel, dus in de expressie `$a // 'gamma'` wordt de huidige waarde van `$a` gebruikt. Daarentegen was de variabele `$b` niet geïnitialiseerd, dus `$b // 'delta'` retourneert de operand aan de rechterkant, en het programma print `delta`.

## //=

De combinatie van `//` en `=` geeft de `//=` operator die een waarde toekent als de variabele niet gedefinieerd is.

```raku
my $x;
$x //= 42;
say $x; # 42
```

{% include nav.html %}