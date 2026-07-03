---
title: sink and quietly
---

{% include menu.html %}

Two more prefixes deal with running code for its effects rather than its value.

The `sink` prefix evaluates something in _sink context_ — purely for its side effects, discarding the result. It is useful with a lazy operation that you want to force to run:

```raku
sink (1..3).map({ print "$_ " });
print "\n"; # 1 2 3
```

The `map` here is run only for the printing it does; `sink` makes sure it actually executes and throws the resulting list away. Without forcing it, a lazy `map` whose result is never used might not run at all.

The `quietly` prefix runs a block with its **warnings suppressed**. Code that would normally print a warning to the error stream stays silent:

```raku
my $value;
quietly {
    say $value + 1; # 1, with no "uninitialized value" warning
}
```

Adding `1` to an undefined `$value` normally warns about using an uninitialized value, but inside `quietly` that warning is hidden. Use it when you knowingly do something that warns and do not want the noise — but sparingly, since warnings usually point at a real mistake.

{% include nav.html %}
