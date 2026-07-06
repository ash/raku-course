---
title: The solution of ’Catch the error‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $ok = try { 6 * 7 };
say $ok;

my $bad = try { die 'broken' };
say $bad.defined;
say $!.message;
```

🦋 You can find the source code in the file [catch-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/catch-the-error.raku).

## Output

```
42
False
broken
```

## Comments

1. When the block runs without error, `try` simply evaluates to the block’s value, so `$ok` holds `42`.

1. The `die` inside the second block throws an exception, so that block evaluates to an undefined value and `$bad.defined` is `False`.

1. The caught exception is stored in the special variable `$!`, and `$!.message` returns the text it was given, `broken`.

{% include nav.html %}
