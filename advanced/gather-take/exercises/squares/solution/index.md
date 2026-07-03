---
title: The solution of ’Squares‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @squares = gather for 1..6 {
    take $_ ** 2 if $_ %% 2;
};

say @squares;
```

🦋 You can find the source code in the file [squares.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/squares.raku).

## Output

```
[4 16 36]
```

## Comments

1. The `if $_ %% 2` guard decides *whether* to take, and `$_ ** 2` decides *what* to take. Only the even numbers `2`, `4`, `6` pass the guard.

1. Their squares `4`, `16`, `36` are the only values handed to `take`, so `gather` collects exactly those. Doing the filtering and the transforming together in one `take` is something a plain `map` cannot express as cleanly.

{% include nav.html %}
