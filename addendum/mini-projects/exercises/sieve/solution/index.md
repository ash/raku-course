---
title: The solution of ’Sieve of Eratosthenes‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $limit = 30;
my %composite;

for 2 .. $limit -> $i {
    next if %composite{$i};
    for ($i², $i² + $i ... $limit) -> $multiple {
        %composite{$multiple} = True;
    }
}

say (2..$limit).grep({ !%composite{$_} });
```

🦋 You can find the source code in the file [sieve.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/sieve.raku).

## Output

```
(2 3 5 7 11 13 17 19 23 29)
```

## Comments

1. Instead of a list of flags, `%composite` remembers which numbers have been
crossed out. A number still missing from it when its turn comes is prime.

1. For each prime `$i`, its multiples are generated as the sequence
`$i², $i² + $i ... $limit` and marked composite. Starting at `$i²` skips
multiples already handled by smaller primes.

1. This is a single [sequence](/paradigms/lazy/sequence-operator), not a C-style
`for` header. The `...` operator takes the first two values, works out the step
between them, and keeps going up to the limit. For `$i` = `3` that means starting
at `9`, then `12`, so the step is `3`, and the loop walks the whole list:

    ```raku
    my $i = 3;
    say ($i², $i² + $i ... 30); # (9 12 15 18 21 24 27 30)
    ```

    So `for` receives one list to iterate over — `9, 12, 15, …` — rather than three
separate clauses.

1. `$i²` squares the number using a Unicode superscript. Raku accepts all three of
`$i * $i`, `$i ** 2`, and `$i²` — they compute exactly the same value, so pick
whichever reads best to you. The superscript digits (`²`, `³`, …) are ordinary
characters you can type or paste directly into the source.

{% include nav.html %}
