---
title: Dumping function signatures in Raku
---

{% assign menu_for_part = page.url | replace: "/", "" %}
{% include menu.html %}

A bare `dd` called inside a function prints its signature: the name and the list of arguments it it has them. Examine the following example with two different functions.

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

The program prints:

```
sub f1()
sub f2($x)
```

If you have multi-function, this method helps to debug and see which multi-variant was called.

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

The output is:

```
sub g()
sub g($x)
```

{% include nav.html %}
