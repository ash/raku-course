---
title: Built-in traits
---

{% include menu.html %}

A _trait_ is applied with the `is` keyword right after a declaration. It runs at compile time and changes some fixed property of the thing it is attached to. Raku ships with many; you have already used a few.

By default, a subroutine’s parameters are **read-only** — you cannot assign to them inside the routine. The `is copy` trait gives you a private, modifiable copy of the argument, which you can change without affecting the caller:

```raku
sub greet($name is copy) {
    $name = "dear $name";
    say "Hello, $name!";
}

my $who = 'Anna';
greet($who); # Hello, dear Anna!
say $who;    # Anna — the caller's own variable is untouched
```

The `is rw` trait goes further: it binds the parameter to the caller’s variable, so a change made inside the routine is visible outside:

```raku
sub bump($n is rw) {
    $n++;
}

my $x = 10;
bump($x);
say $x; # 11
```

Without one of these traits, `$n++` would be a compile-time error, because the parameter would be read-only.

Another common trait sets a default value:

```raku
my $port is default(8080);
say $port; # 8080
```

Here `is default` gives the variable a value to fall back on. Each built-in trait — `is rw`, `is copy`, `is default`, and more — attaches one specific, compile-time behaviour to a declaration. The next topic shows that traits are not a closed set: [you can define your own](/advanced/traits-pragmas/writing-a-trait).

{% include nav.html %}
