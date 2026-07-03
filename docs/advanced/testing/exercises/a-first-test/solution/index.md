---
title: The solution of ’A first test‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
use Test;

ok 'Raku'.chars == 4, 'Raku has four letters';

done-testing;
```

🦋 You can find the source code in the file [a-first-test.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/a-first-test.raku).

## Output

```
ok 1 - Raku has four letters
1..1
```

## Comments

1. `ok` passes because the condition `'Raku'.chars == 4` is true.

1. `done-testing` emits the plan line `1..1`, stating that one test ran.

{% include nav.html %}
