---
title: Lookbehind
---

{% include menu.html %}

A _lookbehind_ checks what comes immediately **before** the current position:

* `<?after …>` — succeeds if the text behind matches (positive lookbehind)
* `<!after …>` — succeeds if the text behind does **not** match (negative lookbehind)

This lets you match something only because of what precedes it, without including that prefix in the result. For example, capture the digits that follow a dollar sign, but leave the `$` out of the match:

```raku
if '$100' ~~ / <?after '$'> \d+ / {
    say $/; # ｢100｣
}
```

The `<?after '$'>` assertion requires a `$` just before the current position, then `\d+` matches the digits. The match is `100`, without the dollar sign.

Lookahead and lookbehind are often combined. A piece of text wrapped in `<?after …>` and `<?before …>` matches only when it sits between the required neighbours — a handy way to extract a value from a known context.

{% include nav.html %}
