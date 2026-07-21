---
title: The solution of ’Zip two lists into a hash‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @names  = <Anna Bob Cara>;
my @scores = 90, 85, 95;

my %result = @names Z=> @scores;

for %result.sort -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 You can find the source code in the file [zip-to-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/zip-to-hash.raku).

## Output

```
Anna: 90
Bob: 85
Cara: 95
```

## Comments

1. `Z=>` is the zip metaoperator applied to the pair constructor `=>`: it walks both
lists in step and builds a `name => score` pair from each position.

1. Assigning that list of pairs to a `%` variable makes a hash, which is then
printed in key order.

{% include nav.html %}
