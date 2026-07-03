---
title: Splitting and joining
---

{% include menu.html %}

Strings can be broken into parts and put back together in several ways.

The `words` method splits a string into a list of its whitespace-separated words:

```raku
say 'Hello big World'.words; # (Hello big World)
```

The `split` method breaks a string at a separator that you choose:

```raku
say 'a,b,c'.split(','); # (a b c)
```

An important special case is splitting on the **empty string** `''`: it breaks a string into its individual characters, but it also slips an empty string in at the very start and the very end, so the result has two elements more than you might expect:

```raku
say 'abc'.split('').elems;        # 5 — the three letters, plus an empty string at each end
say 'abc'.split('', :skip-empty); # (a b c) — the :skip-empty adverb drops the empties
```

To split into characters, the `comb` method, called without arguments, does it directly — with no stray empties to clean up:

```raku
say 'Raku'.comb; # (R a k u)
```

To go the other way, the `join` method glues a list of values into a single string, placing a separator between them:

```raku
say <a b c>.join('-'); # a-b-c
```

Two more methods work on parts of a string. The `substr` method extracts a piece, given a starting position and, optionally, a length:

```raku
say 'Hello World'.substr(0, 5); # Hello
say 'Hello World'.substr(6);    # World
```

And `trim` removes whitespace from both ends of a string:

```raku
say '  hi  '.trim; # hi
```

{% include nav.html %}
