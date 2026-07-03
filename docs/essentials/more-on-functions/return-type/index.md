---
title: Return type of functions
---

{% include menu.html %}

The result of the function can also be explicitly made typed. There are a few ways to express that in code.

```raku
sub add(Int $x, Int $y) returns Int { $x + $y }

my Int sub add(Int $x, Int $y) { $x + $y }

sub add(Int $x, Int $y) of Int { $x + $y }

sub add(Int $x, Int $y --> Int) { $x + $y }
```

Choose one that you like the most. Notice that in the fourth example, the return type is written inside of the parentheses with function parameters.

{% include nav.html %}
