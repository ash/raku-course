---
title: The solution of ’Key and value‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my %h = x => 10, y => 20;
say %h<x>:kv;
```

🦋 You can find the source code in the file [key-and-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/key-and-value.raku).

## Output

```
(x 10)
```

## Comments

1. The `:kv` adverb returns both the key and the value as a list.

1. For a hash, the key is the name you subscript with, so `%h<x>:kv` gives the list `(x 10)`.

{% include nav.html %}
