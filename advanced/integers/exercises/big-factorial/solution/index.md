---
title: The solution of ’How many digits‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say (2 ** 1000).chars;
```

🦋 You can find the source code in the file [big-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/big-factorial.raku).

## Output

```
302
```

## Comments

1. `2 ** 1000` is computed exactly: Raku does not round it or overflow, because integers have arbitrary precision.

1. `chars` is normally a string method, but calling it on an integer first turns the number into its decimal text and then counts the characters. As there are neither minus sign nor decimal point here, that character count is exactly the number of digits — `302`.

{% include nav.html %}
