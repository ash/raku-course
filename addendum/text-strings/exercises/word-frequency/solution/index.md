---
title: The solution of ’Word frequency‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $text = 'the cat sat on the mat the cat';

my %freq;
%freq{$_}++ for $text.words;

for %freq.sort({ -.value, .key }) -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 You can find the source code in the file [word-frequency.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/word-frequency.raku).

## Output

```
the: 3
cat: 2
mat: 1
on: 1
sat: 1
```

## Comments

1. `$text.words` yields the words; `%freq{$_}++` bumps a counter for each, creating
the key on first sight.

1. Sorting by `-.value` puts the most frequent first; adding `.key` as a second
sort field breaks ties alphabetically, so the order is fully deterministic.

{% include nav.html %}
