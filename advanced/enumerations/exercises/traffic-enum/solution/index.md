---
title: The solution of ’Traffic lights‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
enum Light <red amber green>;

my Light $current = red;
say "$current is {$current.value}";

$current = amber;
say "$current is {$current.value}";

$current = green;
say "$current is {$current.value}";
```

🦋 You can find the source code in the file [traffic-enum.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/traffic-enum.raku).

## Output

```
red is 0
amber is 1
green is 2
```

## Comments

1. `my Light $current` is an ordinary, mutable variable — only constrained to the `Light` type. Assigning the next constant advances the light, and the number follows the name each time: `0`, `1`, `2`.

1. `$current++` looks like it should step to the next light on its own, but it fails with a type-check error. `++` treats the constant as its plain number and hands back an `Int` (`red` becomes `1`), and an `Int` no longer fits the `Light` type. So you move the light by assigning the next constant, as above.

1. The type constraint applies to every assignment, not just the first. `$current` will take `red`, `amber`, or `green`, but assigning something that is not a `Light` — a bare number or a string — would be a type-check error.

{% include nav.html %}
