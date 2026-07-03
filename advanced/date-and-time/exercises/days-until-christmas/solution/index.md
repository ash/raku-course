---
title: The solution of ’Weeks until Christmas‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $days = Date.new(2026, 12, 25) - Date.new(2026, 6, 27);
say "{$days div 7} weeks and {$days % 7} days";
```

🦋 You can find the source code in the file [days-until-christmas.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/days-until-christmas.raku).

## Output

```
25 weeks and 6 days
```

## Comments

1. Subtracting one `Date` from another returns the number of days between them — here `181` — so no manual counting of the days in each month is needed. The later date is written first, so the result is positive.

1. Integer division `div` gives the whole number of weeks (`181 div 7` is `25`), and the modulo operator `%` gives the days left over (`181 % 7` is `6`).

{% include nav.html %}
