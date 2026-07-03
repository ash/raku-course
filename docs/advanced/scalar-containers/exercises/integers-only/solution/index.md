---
title: The solution of ’Integers only‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my Int $cars;

$cars = 250.7.Int;
say $cars;
say $cars.WHAT;
```

🦋 You can find the source code in the file [integers-only.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/integers-only.raku).

## Output

```
250
(Int)
```

## Comments

1. The `Int` type constraint in `my Int $cars` makes the container reject any value that is not an integer. A direct assignment of `250.7` (a `Rat`) would be a compile-time error.

1. Calling `.Int` on the rational value `250.7` converts it to the integer `250` by dropping the fractional part. The converted value fits the container. Make sure to not mix this behaviour with rounding.

1. The `.WHAT` pseudo-method confirms that the value stored in the container is of type `Int`.

{% include nav.html %}
