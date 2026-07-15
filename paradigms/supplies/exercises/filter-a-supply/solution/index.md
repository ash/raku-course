---
title: The solution of ’Filter a supply‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out;
```

🦋 You can find the source code in the file [filter-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/filter-a-supply.raku).

## Output

```
[2 4 6]
```

## Comments

1. `grep(* %% 2)` produces a new supply that passes on only the even values, just as `grep` filters a list.

1. The tap collects those values into `@out`, giving `[2 4 6]`.

{% include nav.html %}
