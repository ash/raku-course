---
title: The solution of ’Reverse the word order‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $sentence = 'Raku is really nice';

say $sentence.words.reverse.join(' ');
```

🦋 You can find the source code in the file [reverse-words.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/reverse-words.raku).

## Output

```
nice really is Raku
```

## Comments

1. `.words` breaks the sentence into a list, `.reverse` flips the list order, and
`.join(' ')` glues the words back together with single spaces.

{% include nav.html %}
