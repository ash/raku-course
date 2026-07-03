---
title: Solution to ’Name length‘
---

{% include menu.html %}

## Code

Here is the solution to the task:

```raku
my $first = prompt 'First name: ';
my $last  = prompt 'Last name: ';
say ($first ~ $last).chars;
```

🦋 You can find the source code in the file [name-length.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/name-length.raku).

## Output

Run the program and enter the two names.

```console
$ raku exercises/strings/name-length.raku 
First name: Ada
Last name: Lovelace
11
```

## Comments

We first concatenate the two names with the `~` operator and only then call the `chars` method on the result. The parentheses are important: without them, `chars` would be called on `$last` alone. Because we concatenate the names directly, with no space in between, the space is not counted — `Ada` (3) plus `Lovelace` (8) gives 11.

{% include nav.html %}
