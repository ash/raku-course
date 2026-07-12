---
title: Inline actions vs action classes
---

{% include menu.html %}

You now have two ways to attach meaning to a parse. Which should you use?

**Inline actions** put a `{ make … }` block right inside the token:

```raku
grammar Sum {
    token TOP { <a> '+' <b> { make $<a>.Int + $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}
```

They are quick to write and fine for a tiny grammar or a one-off script. The cost is that the pattern and the logic are tangled together.

**An action class** keeps the two apart — the grammar describes the shape, the action class describes the meaning:

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

This separation has real advantages as a grammar grows: the pattern stays readable, and you can pair **one grammar with several action classes** — one that evaluates, one that pretty-prints, one that builds a data structure — without touching the grammar at all.

The rule of thumb: inline actions for something small and throwaway, an action class for anything you will maintain or reuse.

{% include nav.html %}
