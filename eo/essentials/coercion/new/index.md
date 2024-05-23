---
title: Konvertado de tipoj uzante konstruformojn
---

{% include menu.html %}

Simila metodo estas konstrui novan ekzempleron de objekto de la bezonata tipo vokante ĝian konstruiston, kies nomo estas la nomo de la tipo. Ekzemple:

```raku
my $n = Int('1.23E4');
say $n;      # 12300
say $n.WHAT; # (Int)
```

Ĉi tie, la ŝnuro enhavanta na nombron kun flosanta punkto estas konvertita al entjero.

{% include nav.html %}