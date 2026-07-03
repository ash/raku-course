---
title: Proxying method calls
---

{% include menu.html %}

Being a scalar container actually means being an object of the `Scalar` type. In most cases, the use of scalars is so transparent that a developer does not have to think about the container at all and can imagine working directly with the values stored in it.

This works because a scalar container proxies method calls to the value that it keeps. For example, after the assignment `my $lang = 'Raku'`, you can call the `.chars` method on the variable:

```raku
my $lang = 'Raku';
say $lang.chars; # 4
```

The program prints `4`, which is the number of characters in the string `'Raku'`. The result is exactly the same as if you called `.chars` on the string value directly, rather than on the container variable:

```raku
say 'Raku'.chars; # 4
```

In other words, the container quietly forwards the `.chars` call to the string it holds, and returns the result to you.

{% include nav.html %}
