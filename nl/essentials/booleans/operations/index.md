---
title: Booleaanse operaties
---

{% include menu.html %}

Je kunt alle standaardoperaties uitvoeren met Booleaanse waarden: Booleaanse EN, OF, en exclusieve OF (of XOR):

```raku
say False && True; # EN
say False || True; # OF
say False ^^ True; # XOR
```

Dit programma geeft de volgende resultaten weer:

    False
    True
    True

## Negatie

Om een Booleaanse waarde te negateren, gebruik je de prefix-operator `!`:

```raku
say !False; # True
```

Booleaanse waarden kunnen worden opgeslagen in scalairen variabelen:

```raku
my $did = True;
my $didn't = !$did;
```

{% include nav.html %}