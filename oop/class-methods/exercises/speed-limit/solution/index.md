---
title: The solution of ’A formula on the class‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Geometry {
    method circle-area($r) {
        (π * $r * $r).round
    }
}

say Geometry.circle-area(10);
```

🦋 You can find the source code in the file [speed-limit.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/speed-limit.raku).

## Output

```
314
```

## Comments

1. The method does not touch any attribute — it works only with its parameter `$r` — so it can be called on the class itself, with no object created first.

1. `Geometry.circle-area(10)` calls the method on the type object, passing `10`. The result is `π * 10 * 10`, and after rounding `314`.

{% include nav.html %}
