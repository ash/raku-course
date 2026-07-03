---
title: Integers
---

{% include menu.html %}

You have used integers since the very beginning of the course. This section looks at a few of their less obvious features.

The most important one is that integers in Raku have _arbitrary precision_: they are not limited to a fixed number of bytes, and they never silently overflow. As long as there is enough memory, an integer can grow as large as you need:

```raku
say 2 ** 100;
# 1267650600228229401496703205376
```

This is an exact value, not an approximation. The same is true for products of large numbers — the factorial of 50, for example, is computed exactly:

```raku
my $factorial = 1;
$factorial = $factorial * $_ for 1..50;
say $factorial;
# 30414093201713378043612608166064768844377641568960512000000000000
```

To make long numbers easier to read in the source code, you may group the digits with underscores. The underscores are ignored by the compiler:

```raku
say 1_000_000; # 1000000
```

The following topics show how to write integers in other number bases and introduce a few handy integer methods.

{% include nav.html %}
