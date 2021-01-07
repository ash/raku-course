---
title: Matching against a range
---

{% include menu.html %}

Take a range and a variable with an integer value in it:

```raku
my $r = 1..10;
my $v = 7;
```

Using the _smart-match operator_ `~~`, you can check if the value is within the range:

```
say $v ~~ $r;
```

In the shown example, the condition is `True`, so the program prints `True`.

{% include nav.html %}
