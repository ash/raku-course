---
title: Quoting string arrays
---

{% include menu.html %}

For string arrays, where the items are short strings with no spaces, Raku offers a nice syntax for initialising them.

```raku
my @digits = <zero one two three four five six seven eight nine>;
```

It is up to you to decide to add additional spaces around the angle brackets or not. The compiler accepts both options.

```raku
my @digits = < zero one two three four five six seven eight nine >;
```

Both constructions are equivalent to a straightforward variant:

```raku
my @digits = 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine';
```

%%tipblock
## Array vs List

Notice that in the examples above, the quotation `< . . . >` creates a `List`, not an `Array`. You can confirm it by calling the `WHAT` method:

```raku
say <a b c>.WHAT; # (List)
```

Nevertheless, when you assign it to an array, you get an array with the elements from the list.

```raku
my @a = <a b c>;
say @a.WHAT; # (Array)
```

%%/tipblock

{% include nav.html %}
