---
title: The solution of ’Two to four digits‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say 'abc12345' ~~ / \d ** 2..4 /;
```

🦋 You can find the source code in the file [two-to-four-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/two-to-four-digits.raku).

## Output

```
｢1234｣
```

## Comments

1. `\d ** 2..4` matches between two and four digits in a row.

1. The string has five digits available, but the range caps the match at four, so the pattern takes `1234` and leaves the final `5`. Being greedy, it takes the most the range permits rather than the fewest.

1. Greed only applies within a single match — the engine still stops at the **first** place the pattern succeeds. Even if a longer digit sequence appears later in the string, it is never reached:

    ```raku
    say 'abc123def6789012z' ~~ / \d ** 2..4 /;   # ｢123｣
    ```

    Here `123` is matched even though the later run `6789012` would have filled the whole range with `6789`. The leftmost match wins.

{% include nav.html %}
