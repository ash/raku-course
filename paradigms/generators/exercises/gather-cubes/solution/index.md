---
title: The solution of ’Gather the cubes‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @cubes = gather {
    take $_ ** 3 for 1..4;
}

say @cubes;
```

🦋 You can find the source code in the file [gather-cubes.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-cubes.raku).

## Output

```
[1 8 27 64]
```

## Comments

1. The `take` runs once for each number, contributing its cube (`$_ ** 3`).

1. The `gather` block evaluates to the list of all taken values.

{% include nav.html %}
