---
title: Proxying method calls with scalars
---

{% assign menu_for_part = page.url | replace: "/", "" %}
{% include menu.html %}

Being a scalar container actually means to be an object of the `Scalar` type. The use of scalars is so transparent in most of the cases, so the developer often do not has to think about the container and can imagine working with the assigned values themselves.

Scalar containers proxy method calls to the value that they keep. For example, after the assignment `my $lang = 'Raku'`, you can call the `.chars` method on the variable:

```raku
my $lang = 'Raku';
say $lang.chars; # 4
```

This program prints `4`, which is the number of characters in the string `'Raku'`. The result is exactly the same as if you would call `.chars` on the string, not on the container variable:

```raku
say 'Raku'.chars; # 4
```

{% include nav.html %}
