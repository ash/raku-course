---
title: The solution of ’Run-length encoding‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $text = 'aaabbbbcc';

my $encoded = '';
for $text ~~ m:g/ (.) $0* / -> $match {
    $encoded ~= $match[0] ~ $match.chars;
}

say $encoded;
```

🦋 You can find the source code in the file [run-length.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/run-length.raku).

## Output

```
a3b4c2
```

## Comments

1. The pattern `(.) $0*` captures one character and then matches as many further
copies of it as follow — one whole run per match. `m:g` collects every run.

1. For each run, `$match[0]` is the repeated letter and `$match.chars` is how long
the run is, so the two together give entries like `a3`.

1. Naming the match with `-> $match` is optional. Without it, each match becomes
the topic `$_`, and you can drop the variable and call the methods on it directly:

    ```raku
    my $text = 'aaabbbbcc';
    my $encoded = '';

    for $text ~~ m:g/ (.) $0* / {
        $encoded ~= .[0] ~ .chars;
    }

    say $encoded;
    ```

{% include nav.html %}
