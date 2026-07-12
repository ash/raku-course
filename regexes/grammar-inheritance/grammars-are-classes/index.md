---
title: Grammars are classes
---

{% include menu.html %}

When you write `grammar`, Raku creates something very close to a class. The tokens are methods on it, and the whole machinery of [inheritance](/oop/inheritance) from the part on objects applies. So one grammar can extend another with `is`, just like a subclass:

```raku
grammar Base {
    token TOP      { <greeting> }
    token greeting { 'hi' }
}

grammar Loud is Base {
    token greeting { 'HI' }
}

say Loud.parse('HI').defined; # True
say Base.parse('hi').defined; # True
```

`Loud` inherits `TOP` from `Base` but provides its own `greeting`. When `Loud` parses, its `TOP` calls `<greeting>`, and the overriding token in `Loud` is used — exactly how an overridden method works on objects.

This makes grammars composable. You can write a general grammar for a format and then derive a specialised version that changes only the tokens that differ, without copying the rest.

Even the `.parse` you keep calling comes from this class nature: every grammar automatically inherits from a built-in base type called `Grammar`, which supplies `.parse` (and its partial-match cousin, `.subparse`). You never write it yourself — you get it for free, just as an ordinary class inherits methods from its parent.

{% include nav.html %}
