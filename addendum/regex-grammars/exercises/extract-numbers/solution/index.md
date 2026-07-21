---
title: The solution of ’Extract and sum numbers‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $text = 'order 12 apples, 3 pears and 25 plums';

my @numbers = $text.comb(/\d+/);

say "numbers: @numbers[]";
say "sum: { [+] @numbers }";
```

🦋 You can find the source code in the file [extract-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/extract-numbers.raku).

## Output

```
numbers: 12 3 25
sum: 40
```

## Comments

1. Passing the regex `/\d+/` to `.comb` returns every run of digits as a separate
string, ignoring the words in between.

1. `[+] @numbers` adds them up, coercing the digit strings to numbers along the way.

{% include nav.html %}
