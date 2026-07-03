---
title: Calling with a colon
---

{% include menu.html %}

When you call a method or a subroutine, you usually put its arguments in parentheses: `@a.grep(* > 5)`. Raku offers a second form — put a **colon** after the name, and everything after the colon becomes the argument list, with no parentheses at all:

```raku
say (1..10).grep: * %% 2; # (2 4 6 8 10)
```

The colon in `grep:` does the same job as the parentheses would: `(1..10).grep: * %% 2` means exactly `(1..10).grep(* %% 2)`. The two forms are interchangeable:

```raku
say <a b c>.join('-'); # a-b-c
say <a b c>.join: '-'; # a-b-c
```

The colon form is most pleasant with methods that take a **block** or a [Whatever](/advanced/whatever) expression, because it removes a layer of nesting. Compare:

```raku
my @a = 3, 1, 2;

say @a.sort({ $^b <=> $^a }); # parentheses around the block
say @a.sort: { $^b <=> $^a }; # colon — no closing paren to match
```

Both print `(3 2 1)`, but the colon version reads more cleanly, especially when the block is long.

This is the method-call sibling of the parenthesis-less call you already use with list operators like `say 1, 2, 3` — there, `say` takes everything after it as its arguments. The one rule to remember is that the colon form consumes the **rest of the statement** as arguments, so it has to come at the **end** of a call chain. That is why `('a' .. 'z')».uc».ord.grep: 60 < * < 70` works: `grep` is the last call, and there is nothing to chain after it. If you need to keep calling more methods, use the parenthesised form instead or group the parts of the while expression to make it clear:

```raku
say (('a' .. 'z')».uc».ord.grep: 60 < * < 70)».chr # (A B C D E)
```

One thing to watch: do not combine the colon **and** parentheses as `.grep:( … )`. That spelling clashes with the signature-literal syntax `:( … )` and fails to parse. Use either `.grep( … )` or `.grep: …` — one or the other, not both.

{% include nav.html %}
