---
title: Dumping variables in Raku
---

{% assign menu_for_part = page.url | replace: "/", "" %}
{% include menu.html %}

Call `dd` to see the value and the type of a variable as you would do with `say`:

```raku
my $var = 42;
dd $var;
```

This code prints not only the value of the variable, but also the type of the value:

```
Int $var = 42
```

It is also possible to dump more complex data structures such as array or hashes:

```raku
my @arr = 10, 20, [1, 2, 3], 30;
dd @arr;
# Array @arr = [10, 20, [1, 2, 3], 30]
```

Notice that the nested array is also clearly visible.

```raku
my %hash =
    alpha => 'a',
    beta  => 'b';
dd %hash;
# Hash %hash = {:alpha("a"), :beta("b")}
```

{% include nav.html %}
