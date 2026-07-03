---
title: The solution of ’Alias an array‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @original = 10, 20, 30;
my @alias := @original;

@original.push(40);
say @alias;
```

🦋 You can find the source code in the file [alias-an-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/alias-an-array.raku).

## Output

```
[10 20 30 40]
```

## Comments

1. The binding `@alias := @original` makes `@alias` another name for the same array container, rather than a copy of it.

1. The change is made through `@original` this time, and it is a structural one — `push` adds an element. Because both names are the very same container, `@alias` sees the new element too. The two names are completely interchangeable: it does not matter which one you use to read or to modify the array.

{% include nav.html %}
