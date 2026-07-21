---
title: The solution of ’The most common element‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @values = <a b a c a b>;

my %count;
%count{$_}++ for @values;

say %count.sort(-*.value)[0].key;
```

🦋 You can find the source code in the file [most-common.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/most-common.raku).

## Output

```
a
```

## Comments

1. After tallying each value in `%count`, sorting the pairs by `-*.value` puts the
most frequent first; `[0].key` then gives back that element.

1. Raku can do the tallying for you with a [`Bag`](/advanced/sets-bags-mixes),
which counts how many times each value appears. Then `.max(*.value)` picks the
pair with the highest count, and `.key` is the element itself:

    ```raku
    my @values = <a b a c a b>;

    say @values.Bag.max(*.value).key; # a
    ```

    The whole tally is a single method call, and there is no explicit hash to
    manage.

{% include nav.html %}
