---
title: The match tree
---

{% include menu.html %}

A grammar match is a tree. The top match has a named entry for each token that `TOP` used, and those entries are themselves match objects with their own captures. You navigate the tree with the same `<name>` syntax you use for named captures:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \d+ }
}

my $m = Pair.parse('x=5');
say $m<key>;   # ｢x｣
say $m<value>; # ｢5｣
```

Each branch is a full match object, so you can ask it for its `.Str`, its position, or convert it. Here the value is digits, so turning it into a real number is just a method call:

```raku
say $m<value>.Int; # 5
```

For deeper grammars the tree has more levels — `$m<a><b>` reaches a token `b` used inside a token `a`. Walking the tree like this works, but for anything beyond a couple of fields it becomes clumsy. The next topic shows a cleaner way to attach the value you actually want to each match.

{% include nav.html %}
