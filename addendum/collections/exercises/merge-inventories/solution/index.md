---
title: The solution of ’Merge two inventories‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my %shop-a = apples => 3, pears => 2;
my %shop-b = apples => 4, plums => 5;

my %total;
for %shop-a, %shop-b -> %shop {
    %total{$_} += %shop{$_} for %shop.keys;
}

say %total.sort.map({ "{.key}: {.value}" }).join(', ');
```

🦋 You can find the source code in the file [merge-inventories.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/merge-inventories.raku).

## Output

```
apples: 7, pears: 2, plums: 5
```

## Comments

1. Looping over both hashes and doing `%total{$_} += ...` adds each quantity into
the running total, whether or not the key was seen before — a missing key starts
at zero.

1. `%total.sort` orders the pairs by key, and the `.map` formats each as
`key: value` before they are joined.

{% include nav.html %}
