---
title: Ranges
---

{% include menu.html %}

Ranges in Raku generate lists of sequential items.

In the simplest case, a range is a list of incrementing integers numbers. To create a range, use the `..` operator and the two values that define the minimum and maximum value of the range:

    1 .. 5

While a range is a mean to generate lists, it is still a single object, so it can be saved in a scalar variable:

    my $r = 1 .. 5;

The type of this value is `Range`, which you can confirm with the [`WHAT` method](/raku-course/essentials/data-types/what):

    my $r = 1 .. 5;
    say $r.WHAT; # (Range)

To exclude one of the edges or both of them, modify the range creation operator with the `^` character. There are three more operators that can be constructed in such a way. In the comment, the nubmers that the range generates are shown:

    1 ..^ 5;  # 1, 2, 3, 4
    1 ^.. 5;  #    2, 3, 4, 5
    1 ^..^ 5; #    2, 3, 4

{% include nav.html %}
