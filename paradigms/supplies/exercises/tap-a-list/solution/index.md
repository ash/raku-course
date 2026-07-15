---
title: The solution of ’Tap a list‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
Supply.from-list('red', 'green', 'blue').tap(-> $v { say $v });
```

🦋 You can find the source code in the file [tap-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/tap-a-list.raku).

## Output

```
red
green
blue
```

## Comments

1. `Supply.from-list` emits the three strings in order.

1. The tap runs once for each, printing it.

{% include nav.html %}
