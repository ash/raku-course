---
title: The solution of ’Triple as a method‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Number {
    has $.n;

    method triple {
        $.n * 3;
    }
}

say Number.new(n => 7).triple;
```

🦋 You can find the source code in the file [triple-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-method.raku).

## Output

```
21
```

## Comments

1. As a method, `triple` belongs to the object and works with the object’s own `n` — nothing is passed in.

1. Compared with the subroutine version, the data lives in the object instead of arriving as an argument. Both give `21`.

{% include nav.html %}
