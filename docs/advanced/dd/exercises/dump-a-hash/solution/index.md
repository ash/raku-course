---
title: The solution of ’Dump a hash‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my %h = beta => 2, alpha => 1;
dd %h;
```

🦋 You can find the source code in the file [dump-a-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-a-hash.raku).

## Output

```
{:alpha(1), :beta(2)}
```

## Comments

1. `dd` prints the hash in a code-like form, with each pair as `:key(value)`.

1. The keys come out in sorted order — `alpha` before `beta` — even though `beta` was written first.

{% include nav.html %}
