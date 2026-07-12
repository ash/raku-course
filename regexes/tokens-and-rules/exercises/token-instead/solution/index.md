---
title: The solution of ’Regex versus token‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my regex r { \d+ '5' }
my token t { \d+ '5' }

say so '12345' ~~ / <r> /;
say so '12345' ~~ / <t> /;
```

🦋 You can find the source code in the file [token-instead.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/token-instead.raku).

## Output

```
True
False
```

## Comments

1. In the `regex`, `\d+` first grabs all of `12345`, then **backtracks** — giving back the final `5` so the literal `5` can match. So the regex succeeds.

1. The `token` refuses to give anything back: `\d+` keeps all of `12345`, the literal `5` finds nothing left, and the token fails. This non-backtracking behaviour is exactly why `token` is the right default inside grammars.

{% include nav.html %}
