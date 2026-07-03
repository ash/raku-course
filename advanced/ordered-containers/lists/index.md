---
title: Lists
---

{% include menu.html %}

A list is also an ordered collection of values, but, unlike an array, it is _immutable_: you cannot change, add, or remove its elements. A list is written as a comma-separated sequence of values, often placed inside parentheses:

```raku
my $colours = ('red', 'green', 'blue');
```

You can read the elements of a list by their index, and ask how many there are, just as with an array:

```raku
my $colours = ('red', 'green', 'blue');
say $colours[0];    # red
say $colours.elems; # 3
```

The difference shows up when you try to change an element. With an array it works, because each element is a container:

```raku
my @array = 1, 2, 3;
@array[0] = 10;
say @array; # [10 2 3]
```

With a list it is an error, as the elements of a list are plain values, not containers:

```raku
my $list = (1, 2, 3);
$list[0] = 10;
```

The second program stops with a message:

```
Cannot modify an immutable List ((1 2 3))
  in block <unit> at t.raku line 2
```

So, use an array (the `@` sigil) when you need to change the contents, and a list when you only need to keep a fixed sequence of values.

{% include nav.html %}
