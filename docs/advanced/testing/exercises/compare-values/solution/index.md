---
title: The solution of ’Compare values‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
use Test;

is 'a'.uc, 'A', 'uppercase';

done-testing;
```

🦋 You can find the source code in the file [compare-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/compare-values.raku).

## Output

```
ok 1 - uppercase
1..1
```

## Comments

1. `is` compares the actual value `'a'.uc` with the expected `'A'`.

1. They match, so the test passes; on failure, `is` would print both values.

{% include nav.html %}
