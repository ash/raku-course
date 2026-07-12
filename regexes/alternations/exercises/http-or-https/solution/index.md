---
title: The solution of ’http or https‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say 'https://example' ~~ / http | https /;
```

🦋 You can find the source code in the file [http-or-https.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/http-or-https.raku).

## Output

```
｢https｣
```

## Comments

1. Both `http` and `https` could match at the start, but `|` uses longest-token matching.

1. So the longer `https` wins, even though `http` is written first.

## An alternative solution

The two words differ only by a trailing `s`, so instead of an alternation you can make that `s` optional with the `?` quantifier:

```raku
say 'https://example' ~~ / https? /; # ｢https｣
```

The `?` binds only to the atom right before it — the `s` — not to the whole word, so `https?` reads as `http` followed by an optional `s`. That single pattern matches both `http` and `https`, and being greedy it takes the `s` whenever it is there.

{% include nav.html %}
