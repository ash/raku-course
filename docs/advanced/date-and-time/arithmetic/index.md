---
title: Date arithmetic
---

{% include menu.html %}

Dates support arithmetic, which makes many everyday calculations simple.

Adding an integer to a date moves it forward by that many days. The result is a new date, with the month and year adjusted automatically:

```raku
say Date.new(2026, 6, 27) + 7; # 2026-07-04
```

Subtracting one date from another gives the number of days between them:

```raku
say Date.new(2026, 7, 4) - Date.new(2026, 6, 27); # 7
```

For larger steps, the `later` and `earlier` methods accept named arguments such as `:days`, `:months`, or `:years`:

```raku
say Date.new(2026, 6, 27).later(:days(10));    # 2026-07-07
say Date.new(2026, 6, 27).earlier(:months(2)); # 2026-04-27
```

These methods keep the arithmetic correct across month and year boundaries, so you never have to worry about how many days a particular month has.

{% include nav.html %}
