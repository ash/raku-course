---
title: The solution of ’Palindrome check‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
for <level hello racecar> -> $word {
    say "$word: { $word eq $word.flip ?? 'yes' !! 'no' }";
}
```

🦋 You can find the source code in the file [palindrome.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/palindrome.raku).

## Output

```
level: yes
hello: no
racecar: yes
```

## Comments

1. `.flip` reverses the characters of a string. A word is a palindrome exactly when
it equals its own reverse, which the ternary turns into `yes` or `no`.

{% include nav.html %}
