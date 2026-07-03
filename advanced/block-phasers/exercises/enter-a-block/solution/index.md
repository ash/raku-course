---
title: The solution of ’Enter a block‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
for 1..2 {
    ENTER say '--entering';
    say "body $_";
}
```

🦋 You can find the source code in the file [enter-a-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/enter-a-block.raku).

## Output

```
--entering
body 1
--entering
body 2
```

## Comments

1. `ENTER` runs each time the block is entered, just before its body. Since the loop enters its body once per iteration, `--entering` is printed before each `body` line.

1. This is the difference between `ENTER` and `FIRST`: `FIRST` would run only once for the whole loop, whereas `ENTER` runs on every entry.

{% include nav.html %}
