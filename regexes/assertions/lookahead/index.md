---
title: Lookahead
---

{% include menu.html %}

A _lookahead_ checks what comes immediately **after** the current position. It is written inside angle brackets:

* `<?before …>` — succeeds if the text ahead matches (positive lookahead)
* `<!before …>` — succeeds if the text ahead does **not** match (negative lookahead)

The assertion itself matches no characters; it only tests the position. For example, match a number only when it is followed by the word `dollars`:

```raku
say '100 dollars' ~~ / \d+ <?before ' dollars'> /; # ｢100｣
```

The match is just `100` — the text ` dollars` was checked but not included.

Because the lookahead only asserts what follows, the same number matches or not depending on the currency after it:

```raku
say so '100 euro'    ~~ / \d+ <?before ' euro'> /; # True
say so '100 dollars' ~~ / \d+ <?before ' euro'> /; # False
```

The digits are identical in both strings, but the assertion accepts `100` only when ` euro` comes next.

The negative form is useful for “… but not when followed by …”. Match `cat` only when it is **not** followed by a digit:

```raku
say so 'cats' ~~ / cat <!before \d> /; # True
say so 'cat5' ~~ / cat <!before \d> /; # False
```

In `cat5` the lookahead sees a digit right after `cat`, so the negative assertion fails and the whole match fails.

{% include nav.html %}
