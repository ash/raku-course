---
title: The solution of ’Rectangle area‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Rectangle {
    has $.width;
    has $.height;

    method area {
        $.width * $.height;
    }

    method describe {
        "area is " ~ self.area;
    }
}

say Rectangle.new(width => 3, height => 4).describe;
```

🦋 You can find the source code in the file [rectangle-area.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/rectangle-area.raku).

## Output

```
area is 12
```

## Comments

1. The `area` method reads the object’s own `width` and `height` through their accessors and multiplies them — for a `3` by `4` rectangle, that is `12`.

1. The `describe` method does not repeat that calculation. Instead it calls `self.area`, running the `area` method on the same object and reusing its result. Building larger behaviour out of smaller methods this way keeps each method responsible for one job.

{% include nav.html %}
