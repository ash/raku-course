---
title: Exists and delete
---

{% include menu.html %}

The `:exists` adverb turns a subscript into a question: is there a value at this key or index? It returns a Boolean without fetching anything:

```raku
my %h = apple => 1, pear => 2;

say %h<apple>:exists; # True
say %h<plum>:exists;  # False
```

This is the right way to test for a key, because simply reading `%h<plum>` would either return an undefined value or, depending on the data, hide the difference between “missing” and “present but undefined”.

The `:delete` adverb removes the entry and returns the value it held:

```raku
my %h = apple => 1, pear => 2;

say %h<apple>:delete; # 1
say %h.keys;          # (pear)
say %h;               # {pear => 2}
```

The `apple` entry is gone, and the deleted value `1` is handed back so you can use it.

Both adverbs work on arrays as well, by index:

```raku
my @a = 10, 20, 30;

say @a[1]:exists; # True
say @a[5]:exists; # False

say @a[1]:delete; # 20
say @a[1]:exists; # False
```

If you are curious how the array will look like after a middle item is removed, here’s the answer:

```raku
say @a; # [10 (Any) 30]
```

So a single, consistent notation lets you query and modify containers in place, rather than reaching for separate methods.

{% include nav.html %}
