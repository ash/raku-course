---
title: Quiz — Return type of functions
---

{% include menu.html %}

A function returns the number of seconds in a given number of whole minutes:

```raku
sub seconds(Int $minutes) returns Int {
    $minutes * 60
}
```

Check which of the following assignments will work.

{:.quiz}
1 | my $a = seconds(3); | Assigning to an untyped variable works.
0 | my Rat $b = seconds(4); | An `Int` value cannot be assigned to a `Rat` typed variable.
1 | my Int $c = seconds(5);
0 | my Num $d = seconds(6);
1 | my Str $e = seconds(7).Str; | Explicit type conversion helps.
0 | my Str $f = seconds(8);

{% include quiz.html %}

{% include nav.html %}
