---
title: The solution of ’Gather the multiples of three‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @threes = gather {
    for 1..15 {
        take $_ if $_ %% 3;
    }
}

say @threes;
```

🦋 You can find the source code in the file [gather-multiples-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-multiples-of-three.raku).

## Output

```
[3 6 9 12 15]
```

## Comments

1. The loop visits every number, but `take` runs only when `$_ %% 3` is true.

1. So only the multiples of three are collected into the list.

{% include nav.html %}
