---
title: Exercise ‘Trying allomorphs’
---

{% include menu.html %}

## Task

Consider the following program. Before running it, can you tell which input values will break it and at which line?

```raku
my $input = prompt 'Enter something: ';
my Int $i = $input;
my Str $s = $input;

say $i;
say $s;
```

🦋 You can find the source code in the file [allomorphs.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/allomorphs.raku).

## Solution

✅ [See the solution and read the comments](solution)

{% include nav.html %}
