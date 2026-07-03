---
title: The solution of ’The topic variable‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
for 'apple', 'fig', 'cherry' {
    say "$_ has {.chars} letters";
}
```

🦋 You can find the source code in the file [topic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/topic-variable.raku).

## Output

```
apple has 5 letters
fig has 3 letters
cherry has 6 letters
```

## Comments

1. A `for` loop sets the topic variable `$_` to each item in turn, so the block runs three times, with `$_` equal to `'apple'`, then `'fig'`, then `'cherry'`.

1. Inside the string, `$_` interpolates the current word, and the leading-dot `.chars` call — short for `$_.chars` — gives its length. Both refer to the same topic, which is why the count always matches the word on the line.

{% include nav.html %}
