---
title: The solution of ’The order of ENDs‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
END say 'first END';
END say 'second END';

say 'body';
```

🦋 You can find the source code in the file [end-order.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/end-order.raku).

## Output

```
body
second END
first END
```

## Comments

1. Both `END` phasers run after the main code, so `body` is printed first.

1. Multiple `END` phasers run last-in, first-out: the `second END`, declared later, runs before the `first END`. This mirrors how clean-up usually has to undo the most recent setup first.

{% include nav.html %}
