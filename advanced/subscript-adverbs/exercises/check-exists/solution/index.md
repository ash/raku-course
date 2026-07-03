---
title: The solution of ’Does the key exist‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my %h = a => 1, b => 2;
say %h<z>:exists;
```

🦋 You can find the source code in the file [check-exists.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/check-exists.raku).

## Output

```
False
```

## Comments

1. The `:exists` adverb returns whether the key is present, without fetching the value.

1. The hash has no key `z`, so it returns `False` — and, unlike an ordinary lookup, it does not create the key as a side effect.

{% include nav.html %}
