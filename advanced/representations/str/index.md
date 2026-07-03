---
title: The `.Str` method
---

{% include menu.html %}

The `.Str` method returns the **plain string** form of a value. It is called whenever a value is used in *string context*: by `print` and `put`, by the `~` concatenation operator, and by string interpolation inside double quotes.

```raku
say 42.Str;    # 42
my @a = 'alpha', 'beta', 'gamma';
say @a.Str;    # alpha beta gamma
```

Notice that the array came back **without the brackets**, with its elements simply joined by spaces — that is the visible difference from [`.gist`](../gist), which keeps them. Compare the two side by side:

```raku
my @data = 1, 2, 3;
say @data.gist; # [1 2 3]
say @data.Str;  # 1 2 3
```

Because interpolation uses `.Str`, an array placed inside a string is shown the plain way:

```raku
my @data = 10, 20, 30;
say "data: @data[]"; # data: 10 20 30
```

{% include nav.html %}
