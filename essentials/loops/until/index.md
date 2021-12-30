---
title: until
---

{% include menu.html %}

The `until` construct is opposite to `while`. It executes the block of code until the condition becomes `True` (or, in other words, while it is `False`).

Here is a modified [program from the previous page](../while) that uses `until` and a new condition:

```raku
my $x = 0;
until $x > 10 {
    $x = prompt 'Enter a number, which is not bigger than 10: ';
    say "You entered $x.";
}
say "$x is bigger than 10.";
```

Run the program and check the output:

```console
$ raku t.raku 
Enter a number, which is not bigger than 10: 10
You entered 10.
Enter a number, which is not bigger than 10: 4
You entered 4.
Enter a number, which is not bigger than 10: 1
You entered 1.
Enter a number, which is not bigger than 10: 20
You entered 20.
20 is bigger than 10.
```

## `until` vs. `while`

Compare the equivalent programs with `while` and `until`:

```raku
while $x <= 10 { . . . }

until $x > 10 { . . . }
```

As you see, the conditions are negated versions of each other. In this sense, `while` and `until` are in the same relations as `if` and `unless`.

{% include nav.html %}
