---
title: Quoting adverbs
---

{% include menu.html %}

The behaviour of a quoting construct can be tuned with _adverbs_. Each quoting feature — interpolating scalars, running embedded closures, processing backslashes — is controlled by its own adverb, which switches that one feature on or off, so you can start from `q` or `Q` and add back exactly the features you need.

Some common adverbs:

* `:s` / `:scalar` — interpolate scalar variables (`$x`)
* `:c` / `:closure` — interpolate embedded code in `{ … }`
* `:b` / `:backslash` — process backslash escapes like `\n`

Add one to `q` to enable a single feature. For example, allow embedded code but nothing else:

```raku
say q/result: {3 * 4}/;   # result: {3 * 4}  — plain q leaves the block untouched
say q:c/result: {3 * 4}/; # result: 12        — :c runs the block
```

With plain `q` the `{ 3 * 4 }` is printed verbatim; only `:c` makes the block run and inserts its value, while a `$variable` would still be left alone. Note the `/…/` delimiters here: delimiting the string with `{…}` would still parse — the compiler counts the nested braces correctly — but then the inner `{ 3 * 4 }` is read as part of the delimited text rather than as a closure, so `:c` would leave it literal. Whenever the text contains a `{ … }` block, pick a delimiter other than `{…}` so the closure actually runs. You can add scalar interpolation to the otherwise-literal `Q`:

```raku
my $name = 'Anna';
say Q:s{Hi, $name}; # Hi, Anna
```

Adverbs also turn features **off** with a `!`. To use `qq` but keep `$` literal:

```raku
my $price = 5;
say qq:!s{costs $price dollars}; # costs $price dollars
```

`qq` is equivalent to `Q` with all the interpolation adverbs switched on, and `q` is equivalent to `Q` with a smaller set. The adverbs give you fine-grained control between those two extremes.

{% include nav.html %}
