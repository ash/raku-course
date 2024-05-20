---
title: Arrays in Raku
---

{% assign menu_for_part = page.url | replace: "/", "" %}
{% include menu.html %}

An array is an object that contains scalar containers in it.

For example:

```raku
my @array = 100, 200, 300;
```

Or:

```raku
my @letters = 'a', 'b', 'c';
```

The `@` sigil indicates that such variables behave as `Positional` objects, so you can subscript them to access single scalars in it:

```raku
say @array[1];   # 200
say @letters[2]; # c
```


{% include nav.html %}
