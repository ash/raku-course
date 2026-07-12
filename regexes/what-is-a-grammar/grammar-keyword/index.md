---
title: The grammar keyword
---

{% include menu.html %}

A _grammar_ groups named regexes together under one name, much as a class groups methods. You declare it with the `grammar` keyword:

```raku
grammar Greeting {
    token TOP  { 'Hello, ' <name> '!' }
    token name { \w+ }
}
```

Inside the grammar, each named pattern is written with `token` (a kind of regex you will study in detail shortly). One token, by convention called `TOP`, is the starting point — it describes the whole thing. Here `TOP` says “the text is `Hello, `, then a name, then `!`”, and `name` says what a name looks like.

The tokens can refer to one another by name, exactly like the [named regexes](/regexes/what-is-a-grammar/named-regexes) of the previous topic. `TOP` uses `<name>`, which keeps the grammar readable: each rule has one clear job.

To run a grammar against a string, call its `.parse` method:

```raku
my $m = Greeting.parse('Hello, Anna!');
say $m<name>; # ｢Anna｣
```

The next section looks at `TOP` and `.parse` more closely. For now, the idea to take away is simple: **a grammar is a named collection of named regexes that together describe a whole piece of structured text.**

{% include nav.html %}
