---
title: Converting types using constructor forms
---

{% include menu.html %}

A similar method is to construct a new instance of an object of the required type by calling its constructor, whose name is the name of the type. For example:

```raku
my $n = Int('1.23E4');
say $n;      # 12300
say $n.WHAT; # (Int)
```

Here, the string containing a floating-point number is converted to an integer.

{% include nav.html %}
