---
title: The solution of ’Day of the week‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $date = Date.new(2027, 2, 14);
say $date.day-of-week >= 6;
```

🦋 You can find the source code in the file [day-of-week.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/day-of-week.raku).

## Output

```
True
```

## Comments

1. `day-of-week` numbers the days from `1` (Monday) to `7` (Sunday), so the two weekend days are exactly the numbers `6` and `7`.

1. The test `>= 6` is `True` for both Saturday and Sunday and `False` for any weekday. The 14th of February 2027 is a Sunday (`7`), so the program prints `True`.

{% include nav.html %}
