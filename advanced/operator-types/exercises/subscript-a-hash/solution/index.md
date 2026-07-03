---
title: The solution of ’Subscript a hash‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my %h = a => 1;
say %h<a>;
```

🦋 You can find the source code in the file [subscript-a-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operator-types/subscript-a-hash.raku).

## Output

```
1
```

## Comments

1. The `< >` subscript is a postcircumfix operator: it follows a term (the hash) and surrounds the key.

1. `%h<a>` returns the value stored under the key `a`, which is `1`.

{% include nav.html %}
