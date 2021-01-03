---
title: Named parameters
---

{% include menu.html %}

In contract to [positional parameters](../positional-parameters), _named_ parameters are referred by their names.

The following function takes two parameters called `$from` and `$to`.

```raku
sub distance(:$from, :$to) { $from - $to }
```

Now, to call the function, you need to name the arguments:

```raku
say distance(from => 30, to => 10); # 20
```

It is an error to pass the parameters as if they were positional. The call `distance(30, 10)` generates an error:

    Too many positionals passed; expected 0 arguments but got 2
        in sub distance at t.raku line 1
        in block <unit> at t.raku line 2

The good part is that named parameters can be listed in any order. The following two calls are totally equivalent:

```raku
say distance(from => 30, to => 10); # 20

say distance(to => 10, from => 30); # 20
```

## Passing variables

When the value that you want to pass to a function is kept in a variable, whose name coinsides with the name of the parameter, you can enjoy a special syntax that reduces typing:

```raku
my $from = 30;
my $to = 10;
say distance(:$from, :$to); # 20
```

This is similar to a wordy call:

```raku
say distance(from => $from, to => $to); # 20
```

Again, the order is not strict here:

```raku
say distance(:$to, :$from); # 20
```

If the name of the variable differs from the name of the parameter, use one of the ways to pass a pair:

```raku
my $a = 20;
my $b = 10;

say distance(from => $a, to => $b);

# or:

say distance(:from($a), :to($b));
```

{% include nav.html %}
