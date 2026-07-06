---
title: The solution of ’A point class‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Point {
    has $.x;
    has $.y;
}

my $a = Point.new(x => 3, y => 4);
my $b = Point.new(x => 0, y => 0);

my $dist = sqrt(($a.x - $b.x) ** 2 + ($a.y - $b.y) ** 2);
say $dist;
```

🦋 You can find the source code in the file [point-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/point-class.raku).

## Output

```
5
```

## Comments

1. The two `has $.x` and `has $.y` declarations create the attributes together with their read accessors.

1. Each object stores its own `x` and `y`, so `$a` and `$b` report different coordinates even though they are the same kind of object. This independence is the whole point of attributes — each instance carries its own data.

{% include nav.html %}
