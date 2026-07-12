---
title: Adverb scope
---

{% include menu.html %}

The `:i` adverb can be written in two places, and the difference is **where it takes effect**. On the operator, `m:i/…/` makes the **whole** pattern case-insensitive. Written inside the regex, `:i` is _positional_ — it applies only from the point where it appears onward. That lets you relax the case rule for just part of a pattern:

```raku
say 'RAKU' ~~ /R :i aku/; # ｢RAKU｣
say 'raku' ~~ /R :i aku/; # Nil
```

Here the leading `R` is still matched case-sensitively — so lower-case `raku` fails — while `:i` makes only the `aku` that follows case-insensitive. With `m:i/Raku/`, by contrast, every letter is case-insensitive, so both `RAKU` and `raku` match.

## Confined to a group

The effect of an internal adverb is also confined to its enclosing group. In `/[:i abc]def/` only `abc` ignores case; the `def` after the group is matched strictly:

```raku
say 'ABCdef' ~~ /[:i abc]def/; # ｢ABCdef｣
say 'ABCDEF' ~~ /[:i abc]def/; # Nil
```

## Switching an adverb off

To turn an adverb back off partway through a pattern, negate it with a `!`. So `:!i` restores case sensitivity from that point on:

```raku
say 'ABCdef' ~~ / :i abc :!i def /; # ｢ABCdef｣
say 'ABCDEF' ~~ / :i abc :!i def /; # Nil
```

`:i` relaxes the case rule for `abc`, then `:!i` puts it back so `def` must match exactly. Grouping and `:!i` are two ways to reach the same goal: limit an adverb to just the part of the pattern that needs it. The same on/off switch works for the other in-pattern adverbs too.

{% include nav.html %}
