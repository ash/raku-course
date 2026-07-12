---
title: Captures in the replacement
---

{% include menu.html %}

The replacement part of `s///` can refer to the captures made by the pattern. This lets you rearrange the matched text rather than just throwing it away.

For example, turn a date written as `year-month` into `month/year` by capturing both numbers and putting them back in the other order:

```raku
my $d = '2025-06';
$d ~~ s/ (\d+) '-' (\d+) /$1\/$0/;
say $d; # 06/2025
```

The pattern captures the year into `$0` and the month into `$1`. In the replacement, `$1` and `$0` are written in the reversed order, with a slash between them. (The slash is escaped as `\/` so it is not mistaken for the end of the substitution.) Note that spaces are insignificant on the **pattern** side but literal on the **replacement** side, so the replacement is written with no spaces around it.

Named captures work the same way. This makes a substitution read clearly even when there are several pieces:

```raku
my $name = 'Doe, Jane';
$name ~~ s/ $<last>=(\w+) ', ' $<first>=(\w+) /$<first> $<last>/;
say $name; # Jane Doe
```

{% include nav.html %}
