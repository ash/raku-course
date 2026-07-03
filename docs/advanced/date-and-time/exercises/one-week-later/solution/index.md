---
title: The solution of ’One week later‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $later = Date.new(2027, 2, 28).later(:days(7));
say $later;
say $later.day-of-week;
```

🦋 You can find the source code in the file [one-week-later.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/one-week-later.raku).

## Output

```
2027-03-07
7
```

## Comments

1. `later(:days(7))` moves the date forward by seven days — one week. We could also have written `+ 7`, but the named argument states the unit explicitly.

1. February 2027 has 28 days, so a week after the 28th rolls over into March automatically: the result is `2027-03-07`.

1. Calling `day-of-week` on the new date gives `7`. This makes the result easy to check: a date exactly one week later must fall on the *same* weekday as the original, and `2027-02-28` is a Sunday (`7`) too — so a `7` here is the answer you expect.

{% include nav.html %}
