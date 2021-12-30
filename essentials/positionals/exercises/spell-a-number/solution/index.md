---
title: 'Solution: Spell a number'
---

{% include menu.html %}

The program below has a built-in array with the names of numbers from 0 to 20 and the names of the tens: 20, 30, etc. In the chain of conditional checks, the number is distributed to one of the rules of spelling.

## Code

```raku
my $n = @*ARGS[0];

my @names = <
    zero one two three four five six seven eight nine ten
    eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty
    thirty fourty fifty sixty seventy eighty ninety >;

if $n < 20 {
    say @names[$n];
}
elsif $n % 10 { # Two-digit non-round numbers, e.g., 34
    say @names[$n / 10 + 18] ~ '-' ~ @names[$n % 10];
}
else { # Multiples of 10, e.g., 50
    say @names[$n / 10 + 18];
}
```

🦋 Find the program in the file [spell-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/spell-a-number.raku).

## Example

Run the program a few times to check all the three branches of the `if`—`elsif`—`elses` construction.

```console
$ raku exercises/positionals/spell-a-number.raku 5
five

$ raku exercises/positionals/spell-a-number.raku 12
twelve

$ raku exercises/positionals/spell-a-number.raku 67
sixty-seven

$ raku exercises/positionals/spell-a-number.raku 80
eighty
```

{% include nav.html %}
