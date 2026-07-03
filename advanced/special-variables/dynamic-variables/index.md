---
title: Dynamic variables
---

{% include menu.html %}

A _dynamic_ variable has the `*` twigil. Unlike a lexical variable, which is visible only in the block where it is declared, a dynamic variable is found by looking **outward through the call stack** — through whoever called the current code, no matter where that code is defined.

```raku
my $*greeting = 'Hello';

sub greet {
    say $*greeting;
}

greet(); # Hello
```

The subroutine `greet` does not declare `$*greeting` and does not receive it as an argument, yet it can see it, because the variable is dynamic and `greet` was called from a place where it is in scope.

This example would work with a simple global scalar variable `$greeting`, but the nature of dynamic variables will be seen in the next example.

Because the lookup follows the call stack, a closer declaration **overrides** a farther one for the duration of its block:

```raku
my $*level = 'outer';

sub show {
    say $*level;
}

show(); # outer

{
    my $*level = 'inner';
    show(); # inner
}
```

The same `show` prints `outer` the first time and `inner` when called from inside the block that redeclared `$*level`. This is _dynamic scoping_, and it is how Raku’s built-in `$*OUT`, `$*IN`, and `$*ERR` work — you can temporarily redirect output by redeclaring `$*OUT` in a block, and every routine you call inside it sees the new value. Dynamic variables are ideal for context that should flow into called code without being passed as an explicit argument.

{% include nav.html %}
