---
title: The solution of ’Adding vectors‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Vector {
    has $.x;
    has $.y;

    method add(Vector $v) {
        Vector.new(x => $.x + $v.x, y => $.y + $v.y);
    }

    method Str { "($.x, $.y)" }
}

my $sum = Vector.new(x => 1, y => 2).add(Vector.new(x => 3, y => 4));

put $sum;
```

🦋 You can find the source code in the file [vector-add.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/vector-add.raku).

## Output

```
(4, 6)
```

## Comments

1. `add` does not change either vector; it constructs and returns a brand-new
`Vector` from the summed components.

1. Notice that `Vector` is used *inside its own definition* — as the parameter
type `Vector $v` and in `Vector.new`. That is perfectly fine: the type name is
known from the moment its declaration starts, so a class can freely refer to
itself in its own methods. There is no need for any kind of forward declaration.

1. `put` stringifies its argument with the `Str` method, so the custom
`"($.x, $.y)"` formatting is what appears.

{% include nav.html %}
