---
title: The solution of ’Delete a key‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my %h = a => 1, b => 2, c => 3;
%h<b>:delete;
say %h.elems;
```

🦋 You can find the source code in the file [delete-a-key.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/delete-a-key.raku).

## Output

```
2
```

## Comments

1. The `:delete` adverb removes the entry from the hash (here we ignore the value it returns).

1. The hash started with three entries and now has `2`, confirming that one was removed. Counting with `.elems` keeps the output predictable without depending on the order of the keys.

{% include nav.html %}
