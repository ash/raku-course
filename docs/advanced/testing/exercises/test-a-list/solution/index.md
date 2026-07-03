---
title: The solution of ’Plan two checks‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
use Test;

plan 2;

my @sorted = (3, 1, 2).sort;
is-deeply @sorted, [1, 2, 3], 'sorted';

is 10 % 3, 1, 'remainder';
```

🦋 You can find the source code in the file [test-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/test-a-list.raku).

## Output

```
1..2
ok 1 - sorted
ok 2 - remainder
```

## Comments

1. `plan 2` states the count before any test runs, so the `1..2` line appears first. If the file then ran a different number of checks, the suite would be reported as failing — a safeguard `done-testing` cannot give you.

1. `is-deeply` compares the two lists for exact, type-aware equality. Sorting `3, 1, 2` gives `1, 2, 3`, which matches.

1. `is` compares two values for plain equality and reports both on failure. Here `10 % 3` is `1`, which matches the expected value, so the second test passes too.

{% include nav.html %}
