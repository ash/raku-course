---
title: The solution of ’Prime factorisation‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $n = 360;
my @factors;

for 2..$n -> $d {
    while $n %% $d {
        @factors.push($d);
        $n div= $d;
    }
}

say @factors;
```

🦋 You can find the source code in the file [prime-factors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/prime-factors.raku).

## Output

```
[2 2 2 3 3 5]
```

## Comments

1. For each candidate divisor `$d`, the inner `while` divides it out of `$n` as
many times as it fits, pushing `$d` each time. Because the smaller factors are
removed first, every `$d` that still divides `$n` is guaranteed to be prime.

1. `$n div= $d` is integer division back into `$n`; it shrinks the number until
nothing but `1` is left.

{% include nav.html %}
