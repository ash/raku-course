---
title: The solution of ’A private helper‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub stats {
    sub double($x) { $x * 2 }

    say double(3) + double(5);
}

stats;
```

🦋 You can find the source code in the file [private-helper.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/private-helper.raku).

## Output

```
16
```

## Comments

1. The helper `double` is defined inside `stats`, so it is visible only there and cannot be called from elsewhere in the program.

1. `stats` uses it twice: `double(3)` is `6` and `double(5)` is `10`, and their sum is `16`.

{% include nav.html %}
