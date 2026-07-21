---
title: The solution of ’Digital root‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $n = 987654;

while $n >= 10 {
    $n = [+] $n.comb;
}

say $n;
```

🦋 You can find the source code in the file [digital-root.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/digital-root.raku).

## Output

```
3
```

## Comments

1. `$n.comb` splits the number into its individual digit characters; `[+]` adds
them, numifying the strings automatically.

1. The loop repeats while the result still has more than one digit, so it stops as
soon as `$n` drops below `10`.

{% include nav.html %}
