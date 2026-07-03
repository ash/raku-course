---
title: The solution of ’Weekday numbers‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Day(5);
say Day(1);
```

🦋 You can find the source code in the file [weekday-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/weekday-values.raku).

## Output

```
Fri
Mon
```

## Comments

1. Writing the constants as pairs lets you choose the numbers, here starting from `1`.

1. Calling the enum type as `Day(5)` performs the reverse lookup: it finds the constant whose value is `5`, which is `Fri`. Likewise `Day(1)` gives `Mon`. This is the inverse of `Fri.value`, which would go from the name to the number.

{% include nav.html %}
