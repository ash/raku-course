---
title: Non-capturing groups
---

{% include menu.html %}

Round brackets `( )` do two jobs at once: they _group_ a part of the pattern and they _capture_ it into `$0`, `$1`, and so on. Sometimes you only want the first job — to treat several atoms as a single unit — without spending a capture number on it. For that, use square brackets `[ ]`, which group **without** capturing.

Grouping matters as soon as you attach a quantifier. A quantifier binds only to the atom right before it, so the pattern below repeats just the final letter:

```raku
say 'abccc' ~~ / abc ** 3 /; # ｢abccc｣
```

Only the `c` was repeated three times. Wrap the whole piece in `[ ]` to repeat all of it:

```raku
say 'abcabcabc' ~~ / [ abc ] ** 3 /; # ｢abcabcabc｣
```

Now `[ abc ]` is one unit, and `** 3` applies to the group.

Because `[ ]` takes no capture slot, the numbers stay reserved for the parts you actually care about. Compare a plain key–value match:

```raku
if 'foo=42' ~~ / (\w+) '=' (\d+) / {
    say $0; # ｢foo｣
    say $1; # ｢42｣
}
```

Suppose the key may be preceded by a word you want to skip. Group that prefix with `[ ]` so it does not disturb the numbering:

```raku
if 'the foo=42' ~~ / [ \w+ \s ]? (\w+) '=' (\d+) / {
    say $0; # ｢foo｣
    say $1; # ｢42｣
}
```

The optional `[ \w+ \s ]?` matched `the ` but claimed no capture, so `$0` is still the key and `$1` is still the value. Had you written that prefix with `( )`, everything would have shifted: the prefix would become `$0`, the key `$1`, and the value `$2`.

The rule is short: use `( )` when you want to keep the matched text, and `[ ]` when you only want to group. Both kinds accept quantifiers and alternations, which is why the earlier alternation `[ cat | dog ] house` used square brackets — it needed the grouping but not another capture.

{% include nav.html %}
