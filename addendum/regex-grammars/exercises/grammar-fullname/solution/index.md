---
title: The solution of ’A grammar for full names‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
grammar FullName {
    token TOP   { <first> \s+ <last> }
    token first { \w+ }
    token last  { \w+ }
}

my $match = FullName.parse('Grace Hopper');

say ~$match<first>;
say ~$match<last>;
```

🦋 You can find the source code in the file [grammar-fullname.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-fullname.raku).

## Output

```
Grace
Hopper
```

## Comments

1. The `TOP` token is where parsing starts; it refers to the other tokens by name
with `<first>` and `<last>`, which become keys on the match.

1. `$match<first>` is a match object; the prefix `~` stringifies it to the plain
matched text.

{% include nav.html %}
