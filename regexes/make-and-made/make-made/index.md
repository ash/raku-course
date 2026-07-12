---
title: make and made
---

{% include menu.html %}

Instead of digging values out of the tree afterwards, you can attach a value to a match **while** parsing. Within a token's body you can embed a _code block_ — an inner `{ … }` written among the pattern — which runs as soon as matching reaches it. Inside that block, the function `make` stores a value on the current match:

```raku
grammar OneNum {
    token TOP    { <number> { make $<number>.Int } }
    token number { \d+ }
}
```

When `TOP` matches, the inner `{ make $<number>.Int }` block runs — the outer braces are just the token's body — and stores the integer on the match. You read it back afterwards with `made` (or its alias `.ast`):

```raku
say OneNum.parse('42').made; # 42
```

Because we stored `$<number>.Int`, the value handed back by `made` is a real `Int` — the number itself, not the match object:

```raku
say OneNum.parse('42').made + 1; # 43
```

Note that this particular `+ 1` would give `43` even without the `.Int`, since a match numifies to its digits in arithmetic. The point of calling `.Int` is that the *stored* value genuinely **is** a number — which is what you want once it is kept in a data structure or passed on, rather than the raw match.

The stored value can be anything — a number, a string, an array, an object. A token can also combine the values its sub-tokens made. For example, summing two captured numbers:

```raku
grammar Sum {
    token TOP { <a> '+' <b> { make $<a>.Int + $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Sum.parse('2+3').made; # 5
```

`make` and `made` are the bridge from “it matched” to “here is the meaning”. Putting the blocks inline works, but it mixes the pattern with the logic; the next section moves that logic into a separate [_action class_](/regexes/action-classes).

{% include nav.html %}
