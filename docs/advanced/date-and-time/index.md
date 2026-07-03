---
title: Date and time
---

{% include menu.html %}

Raku has built-in types for working with calendar dates and clock times. A calendar date is represented by the `Date` type. You create one by giving the year, month, and day:

```raku
my $d = Date.new(2026, 6, 27);
say $d; # 2026-06-27
```

Once you have a date, you can read its parts:

```raku
my $d = Date.new(2026, 6, 27);
say $d.year;  # 2026
say $d.month; # 6
say $d.day;   # 27
```

The `day-of-week` method returns which day of the week the date falls on, numbered from `1` for Monday to `7` for Sunday:

```raku
say Date.new(2026, 6, 27).day-of-week; # 6
```

The 27th of June 2026 is a Saturday, so the result is `6`.

The `is-leap-year` method reports whether the date is in a leap year:

```raku
say Date.new(2024, 1, 1).is-leap-year; # True
say Date.new(2026, 1, 1).is-leap-year; # False
```

To get today’s date, call `Date.today`. We do not show its output here, because it depends on the day you run the program.

{% include nav.html %}
