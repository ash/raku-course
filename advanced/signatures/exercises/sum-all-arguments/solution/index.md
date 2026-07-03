---
title: The solution of ’Sum all arguments‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub total(*@nums) {
    [+] @nums
}

say total(3, 5, 7);
```

🦋 You can find the source code in the file [sum-all-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/sum-all-arguments.raku).

## Output

```
15
```

## Comments

1. The slurpy parameter `*@nums` collects all the arguments into the array `@nums`, however many there are.

1. The reduction meta-operator `[+]` then adds them all together, giving `15`.

{% include nav.html %}
