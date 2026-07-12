---
title: The solution of ’A whole-dollar amount‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say '$50' ~~ / <?after '$'> \d+ >> <!before '.'> /;
```

🦋 You can find the source code in the file [whole-dollar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/whole-dollar.raku).

## Output

```
｢50｣
```

## Comments

1. `<?after '$'>` is a positive lookbehind — it requires a `$` just before the number — and `<!before '.'>` is a negative lookahead — it requires that a `.` does **not** follow. Neither the `$` nor the surroundings become part of the match, so the result is just `50`.

1. The `>>` is a word boundary marking the end of the number. Without it, greedy `\d+` could backtrack: on `$39.99` it would give up the `9` and match `3` (which is not followed by `.`). `>>` forces the whole number to be taken, so `$3.99` and `$39.99` correctly match nothing.

1. This is a case where a lookahead earns its keep: you cannot express "not followed by a decimal point" with an ordinary capturing group, because there is nothing there to capture — only a condition to check.

{% include nav.html %}
