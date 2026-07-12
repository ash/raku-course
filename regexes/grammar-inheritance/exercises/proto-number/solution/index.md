---
title: The solution of ’A number with proto‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<dec> { \d+ }
    token number:sym<hex> { '0x' <[0..9a..f]>+ }
}

say Number.parse('0xff').defined;
```

🦋 You can find the source code in the file [proto-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-number.raku).

## Output

```
True
```

## Comments

1. The proto token `number` has two variants, `dec` and `hex`.

1. For `0xff`, the `dec` variant matches only the leading `0`, which would leave `xff` over; the `hex` variant matches the whole thing. Longest-token matching therefore picks `hex`, and the string parses. The same grammar still accepts a plain decimal such as `42`.

{% include nav.html %}
