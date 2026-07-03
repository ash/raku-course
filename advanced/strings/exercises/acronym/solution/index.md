---
title: The solution of ’Acronym‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $phrase = 'hyper text markup language';

my $acronym = '';
for $phrase.words -> $word {
    $acronym ~= $word.substr(0, 1);
}

say $acronym.uc;
```

🦋 You can find the source code in the file [acronym.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/acronym.raku).

## Output

```
HTML
```

## Comments

1. `$phrase.words` gives the list of words. The loop takes the first character of each one with `substr(0, 1)` and appends it to `$acronym`.

1. Once all the initials are collected, `uc` turns the result into upper case: `HTML`.

{% include nav.html %}
