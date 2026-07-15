---
title: The solution of ’Gather with a condition‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @vowels = gather {
    for 'education'.comb {
        take $_ if $_ ~~ / <[aeiou]> /;
    }
}

say @vowels;
```

🦋 You can find the source code in the file [gather-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-vowels.raku).

## Output

```
[e u a i o]
```

## Comments

1. `.comb` splits the word into single characters that the loop visits in order.

1. `take` keeps a character only when it matches the vowel class, giving the vowels in the order they appear.

{% include nav.html %}
