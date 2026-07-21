---
title: The solution of ’Which quadrant‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Point {
    has $.x;
    has $.y;

    method quadrant {
        return 'origin'     if $.x == 0 && $.y == 0;
        return 'on an axis' if $.x == 0 || $.y == 0;
        return $.x > 0 ?? ($.y > 0 ?? 'first'  !! 'fourth')
                       !! ($.y > 0 ?? 'second' !! 'third');
    }
}

for Point.new(x => 3, y => 4),  Point.new(x => -2, y => 5),
    Point.new(x => -1, y => -6), Point.new(x => 0, y => 3) -> $point {
    say "({$point.x}, {$point.y}): {$point.quadrant}";
}
```

🦋 You can find the source code in the file [point-quadrant.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/point-quadrant.raku).

## Output

```
(3, 4): first
(-2, 5): second
(-1, -6): third
(0, 3): on an axis
```

## Comments

1. The two early `return`s handle the special cases first — the origin and points
lying on an axis — so the rest of the method can assume both coordinates are
non-zero.

1. The nested ternary then reads off the quadrant from the signs of `x` and `y`: a
positive `x` means the first or fourth quadrant, a negative `x` the second or
third.

{% include nav.html %}
