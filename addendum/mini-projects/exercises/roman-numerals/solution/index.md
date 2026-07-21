---
title: The solution of ’Roman numerals‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @table =
    1000 => 'M', 900 => 'CM', 500 => 'D', 400 => 'CD',
    100  => 'C', 90  => 'XC', 50  => 'L', 40  => 'XL',
    10   => 'X', 9   => 'IX', 5   => 'V', 4   => 'IV',
    1    => 'I';

my $n = 1994;
my $roman = '';

for @table -> $pair {
    while $n >= $pair.key {
        $roman ~= $pair.value;
        $n -= $pair.key;
    }
}

say $roman;
```

🦋 You can find the source code in the file [roman-numerals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/roman-numerals.raku).

## Output

```
MCMXCIV
```

## Comments

1. The table lists every symbol in descending value, including the subtractive
forms like `CM` (900) and `IV` (4), so the algorithm never has to special-case
them.

1. For each entry, the `while` appends the symbol and subtracts its value as many
times as it fits, so the largest pieces are used up first.

{% include nav.html %}
