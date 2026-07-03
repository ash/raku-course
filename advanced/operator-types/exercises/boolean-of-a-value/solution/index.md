---
title: The solution of ’Boolean of a value‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say ?0;
say ?5;
```

🦋 You can find the source code in the file [boolean-of-a-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operator-types/boolean-of-a-value.raku).

## Output

```
False
True
```

## Comments

1. `?` is a prefix operator: it comes before its operand and returns the operand’s Boolean value.

1. `0` is false and `5` is true, so the program prints `False` and `True`.

{% include nav.html %}
