---
title: The solution of ’Not followed by‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say so '50 dollars' ~~ / \d+ >> <!before '%'> /;
```

🦋 You can find the source code in the file [not-followed.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/not-followed.raku).

## Output

```
True
```

## Comments

1. `<!before '%'>` is a negative lookahead: it succeeds only when the text right after the number is **not** a `%`.

1. The `>>` is a word boundary marking the **end** of the number, and it matters here. Without it, the greedy `\d+` would backtrack: on `50% off` it would give up the `0` and match just `5` — which is *not* followed by `%` — so the pattern would wrongly succeed. `>>` forces `\d+` to take the whole number, so the lookahead is tested at the real end. As a result `50 dollars` gives `True`, while `50% off` correctly gives `False`.

{% include nav.html %}
