---
title: Binding with `:=`
---

{% include menu.html %}

So far, every variable you created spawned a new container, and assignment with `=` placed a value _into_ that container. Binding, written with `:=`, is different: it makes a name refer to an _existing_ container instead of creating a new one.

After binding, the two names share the same container, so a change made through one of them is visible through the other:

```raku
my $x = 10;
my $y := $x;

$x = 20;
say $y; # 20
```

Here, `$y := $x` does not copy the value `10`. It makes `$y` another name for the very same container as `$x`. When `$x` is later set to `20`, reading `$y` returns `20` as well.

Compare this with ordinary assignment, which copies the value into a separate container:

```raku
my $x = 10;
my $y = $x; # a plain copy

$x = 20;
say $y; # 10
```

Binding works with arrays too. The following makes `@alias` another name for `@data`:

```raku
my @data = 1, 2, 3;
my @alias := @data;

@alias[0] = 99;
say @data; # [99 2 3]
```

One more detail: if you bind a name directly to a literal value, there is no container behind it, so the name becomes read-only:

```raku
my $pi := 3.14;
$pi = 3;
```

```
Cannot assign to an immutable value
  in block <unit> at t.raku line 2
```

{% include nav.html %}
