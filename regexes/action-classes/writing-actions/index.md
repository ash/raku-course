---
title: Writing an action class
---

{% include menu.html %}

An action class is an ordinary class with one method per grammar token. Each method receives the match for that token as `$/`, and calls `make` to attach a value — exactly what the inline block did, but kept apart from the pattern:

```raku
grammar Sum {
    token TOP { <a> '+' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class SumActions {
    method TOP($/) { make $<a>.made + $<b>.made }
    method a($/)   { make $/.Int }
    method b($/)   { make $/.Int }
}
```

The grammar now contains only the pattern; all the meaning lives in `SumActions`. Notice how the methods cooperate: `a` and `b` each `make` an integer, and `TOP` reads those with `$<a>.made` and `$<b>.made` and makes their sum.

To use the action class, pass an instance to `.parse` with the `actions` named argument, then read the top result with `.made`:

```raku
say Sum.parse('2+3', actions => SumActions.new).made; # 5
```

As the grammar parses, each token’s method runs automatically and builds the value from the bottom up. The result on the top match is the value you want — here, the number `5`.

{% include nav.html %}
