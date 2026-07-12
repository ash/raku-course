---
title: Parsing with parse
---

{% include menu.html %}

To run a grammar, call its `.parse` method with the string to analyse:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}

my $m = Pair.parse('x=5');
say $m<key>;   # ｢x｣
say $m<value>; # ｢5｣
```

`.parse` returns a match object when the grammar matches the **entire** string, and `Nil` when it does not. Because the whole input must match, there is no need for `^` and `$` anchors — `.parse` adds that requirement for you:

```raku
say Pair.parse('x=5').defined; # True
say Pair.parse('x=').defined;  # False
```

The [match object](/regexes/matching/match-object) works just like the ones you met earlier. Each token used in the grammar becomes a named capture, so `$m<key>` and `$m<value>` give the matched parts. The tokens nest, so a grammar builds a small tree of matches — the subject of a later section.

{% include nav.html %}
