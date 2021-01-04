---
title: Quiz — Functions with default values
---

{% include menu.html %}

There is a function:

```raku
sub add(Int $x, Int $y) returns Int {
    $x + $y
}
```

Check which of the following assignments will work.

{:.quiz}
1 | my $a = add(4, 6); | Assigning to an untyped variable works.
0 | my Rat $b = add(5, 6); | An `Int` value cannot be assigned to a `Rat` typed variable.
1 | my Int $c = add(7, 8);
0 | my Num $d = add(9, 10);
1 | my Str $e = add(9, 10).Str; | Explicit type conversion helps.
0 | my Str $f = add(9, 10);

{% include quiz.html %}

{% include nav.html %}
