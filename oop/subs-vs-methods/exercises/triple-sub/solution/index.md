---
title: The solution of ’Triple as a subroutine‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub triple($x) {
    $x * 3;
}

say triple(7);
```

🦋 You can find the source code in the file [triple-sub.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-sub.raku).

## Output

```
21
```

## Comments

1. As a subroutine, `triple` is a standalone operation: it receives the value to work on as an argument.

1. The companion exercise solves the same task as a method, so you can compare the two approaches.

{% include nav.html %}
