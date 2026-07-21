---
title: The solution of ’Parse a date with named captures‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $date = '2026-07-03';

if $date ~~ / $<year>=(\d ** 4) '-' $<month>=(\d\d) '-' $<day>=(\d\d) / {
    say "year: $<year>, month: $<month>, day: $<day>";
}
```

🦋 You can find the source code in the file [parse-date.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/parse-date.raku).

## Output

```
year: 2026, month: 07, day: 03
```

## Comments

1. `$<year>=( ... )` gives a capture a name. After a successful match, `$<year>`,
`$<month>`, and `$<day>` hold the captured pieces.

1. `\d ** 4` means exactly four digits, so the pattern only matches a properly
shaped date.

{% include nav.html %}
