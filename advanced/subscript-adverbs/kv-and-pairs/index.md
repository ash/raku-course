---
title: Keys, values, and pairs
---

{% include menu.html %}

Other adverbs change **what** a subscript gives back. By default, a subscript returns the value; these return more:

* `:v` — the value (the default)
* `:k` — the key (or index)
* `:kv` — both the key and the value
* `:p` — a `Pair` of key and value

For an array, the “key” is the index:

```raku
my @a = 10, 20, 30;

say @a[1]:kv; # (1 20)
say @a[1]:p;  # 1 => 20
```

`@a[1]:kv` returns the index and the value together as a list, and `@a[1]:p` returns them as a pair.

The same works for hashes, and it is especially handy across a slice of several keys at once:

```raku
my %h = a => 1, b => 2, c => 3;

say %h<a c>:kv; # (a 1 c 3)
```

Here, a two-key slice comes back as alternating keys and values. These adverbs are what `map`, `for`, and friends often rely on when you want to process keys and values side by side, without splitting the work into separate lookups.

{% include nav.html %}
