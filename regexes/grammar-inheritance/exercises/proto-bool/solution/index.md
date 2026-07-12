---
title: The solution of ’A boolean with proto‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
grammar Bool {
    token TOP { <bool> }

    proto token bool {*}
    token bool:sym<true>  { 'true' }
    token bool:sym<false> { 'false' }
}

say Bool.parse('true').defined;
say Bool.parse('false').defined;
say Bool.parse('unknown').defined;
```

🦋 You can find the source code in the file [proto-bool.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-bool.raku).

## Output

```
True
True
False
```

## Comments

1. The proto token `bool` has two named variants, `true` and `false`.

1. Each parse selects the matching variant, so both `'true'` and `'false'` succeed. A proto token is the grammar's tidy way of saying “one of these named alternatives”.

1. `'unknown'` matches neither variant, so there is nothing for the proto token to dispatch to and the parse fails — `False`. The proto accepts exactly the alternatives you list, and nothing else.

{% include nav.html %}
