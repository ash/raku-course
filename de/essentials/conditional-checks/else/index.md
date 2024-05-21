---
title: Der else-Block
---

{% include menu.html %}

Ein `if`-Block kann von einem `else`-Block gefolgt werden, der ausgeführt wird, wenn die Bedingung nicht erfüllt ist.

```raku
my $t = 36.6;
if 35.5 < $t < 37.5 {
    say 'Du bist in Ordnung.';
}
else {
    say 'Ruf vielleicht einen Arzt an?';
}
```

Der `else`-Block kann nicht alleine verwendet werden (es gibt eine bessere Alternative namens [`unless`](../unless), die in Kürze vorgestellt wird).

{% include nav.html %}