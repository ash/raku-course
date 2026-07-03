---
title: The solution of ’Final message‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $count = 0;

END say "processed $count items";

$count++ for 1..3;
```

🦋 You can find the source code in the file [final-message.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/final-message.raku).

## Output

```
processed 3 items
```

## Comments

1. The `END` phaser is written before the loop, but it runs last — after the main code has finished. By then `$count` has been incremented three times.

1. Because the phaser closes over `$count`, it reads the variable’s *final* value, not the `0` it held when the phaser appeared in the source. This is the usual reason to put a summary in `END`.

{% include nav.html %}
