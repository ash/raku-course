---
title: q, qq, and Q
---

{% include menu.html %}

There are three base quoting operators, differing in how much they process the text inside:

* `q` — like single quotes: almost everything is literal
* `qq` — like double quotes: variables and escapes are interpolated
* `Q` — the most literal of all: **nothing** is processed

Each takes the text between a pair of delimiters. The familiar `'…'` is a shorthand for `q`, and `"…"` is a shorthand for `qq`:

```raku
my $name = 'Anna';

say q{Hello $name};  # Hello $name
say qq{Hello $name}; # Hello Anna
```

`q` leaves `$name` untouched; `qq` interpolates it. Backslash escapes such as `\n` behave the same way: only `qq` (and `"…"`) turns `\n` into a real newline, while both `q` and `Q` leave it as the two characters `\` and `n`:

```raku
say qq{line\nbreak}; # line<newline>break
say q{line\nbreak};  # line\nbreak
say Q{line\nbreak};  # line\nbreak
```

So where do `q` and `Q` differ? `q`, like single quotes, still handles a *small* set of escapes — a doubled backslash `\\` becomes one, and you can escape the closing delimiter — whereas the plain `Q` form processes **nothing** at all:

```raku
say q{a\\b}; # a\b   — q collapses the escaped backslash
say Q{a\\b}; # a\\b  — Q keeps both characters
```

You can choose any delimiters — `q{…}`, `q[…]`, `q/…/`, `q!…!` — which is handy when the text itself contains quotes. The three operators are the foundation; the next topic shows how [_adverbs_](/advanced/quoting/adverbs) let you mix and match exactly which features are active.

{% include nav.html %}
