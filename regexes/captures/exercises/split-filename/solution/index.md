---
title: The solution of ’Split a filename‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
if 'report.txt' ~~ / (\w+) '.' (\w+) / {
    say ~$0;
    say ~$1;
}
```

🦋 You can find the source code in the file [split-filename.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/split-filename.raku).

## Output

```
report
txt
```

## Comments

1. The first pair of brackets captures the base name into `$0`, the second captures the extension into `$1`. The dot between them is quoted so it matches a literal `.` rather than any character.

1. The `~` in front of each capture puts it into string context, so it prints as plain text. Plain `say $0` would instead show the match object with its corner brackets, `｢report｣`. Writing `say $0.Str` does the same as `say ~$0`.

{% include nav.html %}
