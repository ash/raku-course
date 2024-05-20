---
title: Default values of scalars in Raku
---

{% assign menu_for_part = page.url | replace: "/", "" %}
{% include menu.html %}

When a new scalar variable is created without immediate value assignment, the variable in the scalar container gets some default value. The exact value depends on the type of the variable.

Uninitialized values get default values depending on their type. The following program though is not the best way of using Raku:

```raku
my $int;
say $int + 5;
```

While the output will contain `5`, which may be the desired output assuming that the initial default value of `$int` would be `0`, it also has an error message:

```
Use of uninitialized value of type Any in numeric context
  in block <unit> at t.raku line 2
5
```

To eliminate any uncertainty, either assign a value explicitly:

```raku
my $int = 0;
say $int + 5; # 5
```

Or determine a default value:

```raku
my $int is default(0);
say $int + 5; # 5
```

The default value is not limited to zero values only. It can be any value you thing is a good candidate for being default. For example:

```raku
my $int is default(1);
say $int + 5; # 6
```

{% include nav.html %}
