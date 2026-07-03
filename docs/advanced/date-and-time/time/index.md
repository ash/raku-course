---
title: Working with time
---

{% include menu.html %}

When you need the time of day as well as the date, use the `DateTime` type. It is created much like a `Date`, but you also give the hour, minute, and second:

```raku
my $dt = DateTime.new(2026, 6, 27, 14, 30, 0);
say $dt; # 2026-06-27T14:30:00Z
```

The default text form follows the ISO 8601 standard: the date, the letter `T`, the time, and a trailing `Z` for the UTC time zone.

A `DateTime` gives access to the time parts, in addition to the date parts you already know:

```raku
my $dt = DateTime.new(2026, 6, 27, 14, 30, 0);
say $dt.hour;   # 14
say $dt.minute; # 30
```

To get the current moment, call `DateTime.now`. As with `Date.today`, we do not show its output, because it changes every time the program runs.

{% include nav.html %}
