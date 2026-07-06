---
title: The solution of ’Check the exit code‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $proc = run 'sh', '-c', 'exit 4';

say $proc.exitcode;
say $proc ?? 'success' !! 'failure';
```

🦋 You can find the source code in the file [check-exit-code.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/check-exit-code.raku).

## Output

```
4
failure
```

## Comments

1. `run` returns a `Proc`. Storing it in `$proc` — and then reading it — is important here: a failing command whose `Proc` is discarded would throw, but inspecting the result counts as handling it.

1. `.exitcode` is the number the command returned: `4`. Testing the `Proc` as a Boolean answers the simpler question — it is true only when the exit code is `0`, so here it is false and the program prints `failure`.

{% include nav.html %}
