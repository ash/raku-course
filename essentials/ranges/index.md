---
title: Ranges
---

{% include menu.html %}

Ranges in Raku generate lists of sequential items.

In the simplest case, a range is a list of incrementing integers numbers. To create a range, use the `..` operator and the two values that define the minimum and maximum value of the range:

```raku
1 .. 5
```

Spaces here are optional. The following construction can be written as:

```raku
1..5
```

While a range is a mean to generate lists, it is still a single object, so it can be saved in a scalar variable:

```raku
my $r = 1 .. 5;
```

## Not only numbers

It is possible to construct a range from other datatypes, for which Raku knows how to increment them. For example:

```raku
my $letters = 'a' .. 'z';
```

Ranges are objects of their own data type in Raku. The type of the variable `$r` is `Range`.

{% include nav.html %}
