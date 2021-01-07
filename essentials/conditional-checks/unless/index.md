---
title: Using unless
---

{% include menu.html %}

All Boolean conditions can be easily negated with the [`!` operator](/essentials/booleans/operations#negation). However, in some cases, an explicit negation makes the expression heavier and less readable. In these cases, `unless` can be a friend.

The `unless` block is executed when its condition is `False`.

```raku
my $broken = False;

# ...Something can set $broken to True here...
    
unless $broken {
    say "Don’t worry!";
    say "Be happy!";
}
```

Compare the two variants of the same program:

With `if` and negation:

```raku
if !$broken { . . . }
```

With `unless`:

```raku
unless $broken { . . . }
```

Having the alternatives, you can always choose what feels better to you in the current situation.

Notice that `unless` cannot be followed by an `else` or `elsif` blocks. In this case, the only way is to use `if`.

{% include nav.html %}
