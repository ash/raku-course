---
title: Solution of ‘Plural ending’
---

{% include menu.html %}

The program should check if the entered number is bigger then one and put the noun in the plural form.

## Code

```raku
my $n = prompt 'How many files to copy? ';
my $ending = $n == 1 ?? '' !! 's';
say "$n file{$ending} copied.";
```

🦋 Find the program in the file [plural-ending.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/plural-ending.raku).

## Output

Run the program at least twice and test it with the input `1` and with any other positive integer:

```console
$ raku exercises/conditional-checks/plural-ending.raku
How many files to copy? 10
10 files copied.

$ raku exercises/conditional-checks/plural-ending.raku
How many files to copy? 1
1 file copied.
```

## Comment

You may, probably, tend to mistakenly type a single `?` instead of double `??` and/or a colon `:` instead of `!!`.

{% include nav.html %}
