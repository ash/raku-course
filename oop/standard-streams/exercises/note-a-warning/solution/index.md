---
title: The solution of ’Note a warning‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $value = -3;

note 'Warning: the value is negative' if $value < 0;
say $value.abs;
```

🦋 You can find the source code in the file [note-a-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/note-a-warning.raku).

## Output

```
Warning: the value is negative
3
```

## Comments

1. `note` sends the warning to standard error, and only when the value is actually negative. `say` sends the real result — the absolute value `3` — to standard output.

1. Keeping the diagnostic on standard error means it does not pollute the program’s real output: discarding standard error with `2>/dev/null` leaves just the `3` behind.

{% include nav.html %}
