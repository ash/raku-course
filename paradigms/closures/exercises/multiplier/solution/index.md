---
title: The solution of ’A multiplier‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub multiplier($factor) {
    -> $x { $x * $factor };
}

my &triple = multiplier(3);
say triple(4);
```

🦋 You can find the source code in the file [multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/multiplier.raku).

## Output

```
12
```

## Comments

1. The returned pointy block closes over `$factor`, remembering it is `3`.

1. Calling it with `4` gives `12`.

{% include nav.html %}
