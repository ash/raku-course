---
title: The solution of ’Count the vowels‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $text = 'Programming in Raku';

say +$text.comb(/ <[aeiouAEIOU]> /);
```

🦋 You can find the source code in the file [count-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/count-vowels.raku).

## Output

```
6
```

## Comments

1. Passing a regex to `.comb` returns every matching character. The character class
`<[aeiouAEIOU]>` lists the vowels in both cases.

1. The prefix `+` puts the resulting list into numeric context, giving its length —
the number of vowels.

{% include nav.html %}
