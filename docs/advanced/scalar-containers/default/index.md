---
title: Default values
---

{% include menu.html %}

When a new scalar variable is created without an immediate assignment, the container still holds a value — its default value. The exact default depends on the type of the variable.

The program below is not the best way to use Raku, but it shows the point:

```raku
my $int;
say $int + 5;
```

The output contains `5`, which may be what you expected if you assumed that the default value of `$int` is `0`. However, the program also prints a warning:

```
Use of uninitialized value $int of type Any in numeric context
  in block <unit> at t.raku line 2
5
```

To remove this uncertainty, either assign a value explicitly:

```raku
my $int = 0;
say $int + 5; # 5
```

Or declare a default value with the `is default` trait:

```raku
my $int is default(0);
say $int + 5; # 5
```

The default value is not limited to zero. It can be any value that you consider a good candidate, for example:

```raku
my $int is default(1);
say $int + 5; # 6
```

{% include nav.html %}
