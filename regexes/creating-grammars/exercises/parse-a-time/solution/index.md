---
title: The solution of ’Parse a time‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
grammar Time {
    token TOP    { <hour> ':' <minute> ':' <second> }
    token hour   { \d ** 2 }
    token minute { \d ** 2 }
    token second { \d ** 2 }
}

say Time.parse('09:30:45')<second>;
```

🦋 You can find the source code in the file [parse-a-time.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-time.raku).

## Output

```
｢45｣
```

## Comments

1. `TOP` describes the whole time as three tokens separated by colons. Each part is `\d ** 2` — exactly two digits — rather than an open-ended `\d+`, so a malformed value like `09:30:456` is rejected. (If a part may be unpadded, such as the hour in `9:30:45`, write `\d ** 1..2` to allow one or two digits.)

1. After parsing, each token is a named capture, so the second is read as `<second>` on the match. Adding a third part is just one more token and one more colon — the grammar scales naturally.

{% include nav.html %}
