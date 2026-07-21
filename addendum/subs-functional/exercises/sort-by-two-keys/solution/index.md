---
title: The solution of ’Sort by two keys‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @people =
    { name => 'Anna', age => 30 },
    { name => 'Bob',  age => 25 },
    { name => 'Cara', age => 30 };

for @people.sort({ .<age>, .<name> }) -> %person {
    say "%person<name> (%person<age>)";
}
```

🦋 You can find the source code in the file [sort-by-two-keys.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sort-by-two-keys.raku).

## Output

```
Bob (25)
Anna (30)
Cara (30)
```

## Comments

1. When a `.sort` block returns a list, Raku compares by the first element, then the
second — so `{ .<age>, .<name> }` sorts by age first and uses the name only to
break ties.

1. Anna and Cara share age `30`, so they are ordered alphabetically; Bob, being
younger, comes first.

{% include nav.html %}
