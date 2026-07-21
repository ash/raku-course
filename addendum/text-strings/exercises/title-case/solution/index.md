---
title: The solution of ’Title case‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $title = 'the lord of the rings';

say $title.words>>.tc.join(' ');
```

🦋 You can find the source code in the file [title-case.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/title-case.raku).

## Output

```
The Lord Of The Rings
```

## Comments

1. `.tc` (“title-case”) capitalises the first letter of a string. The hyper
operator `>>.tc` applies it to every word at once, and `.join(' ')` reassembles
the sentence.

{% include nav.html %}
