---
title: Dumping function signatures
---

{% include menu.html %}

A bare `dd` — called with no arguments inside a subroutine — prints the signature of that subroutine: its name and the list of parameters, if it has any. Examine the following example with two subroutines:

```raku
sub f1 {
    dd
}

f1();

sub f2($x) {
    dd
}

f2(42);
```

The program prints the signatures rather than any values:

```console
sub f1()
sub f2($x)
```

This is especially useful with multi-functions, where it tells you which candidate was actually called:

```raku
multi sub g {
    dd
}

multi sub g($x) {
    dd
}

g();
g(42);
```

The output names the matching variant each time:

```console
sub g()
sub g($x)
```

{% include nav.html %}
