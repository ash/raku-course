---
title: The solution of ’Last name first‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
if 'Grace Hopper' ~~ / (\w+) ' ' (\w+) / {
    say "$1, $0";
}
```

🦋 You can find the source code in the file [swap-words.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/swap-words.raku).

## Output

```
Hopper, Grace
```

## Comments

1. The first and last names are captured into `$0` and `$1`.

1. Inside a double-quoted string each capture interpolates as its matched text. Printing `"$1, $0"` puts the last name first, followed by a literal comma and space and then the first name.

{% include nav.html %}
