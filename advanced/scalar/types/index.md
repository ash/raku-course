---
title: Data type and scalar containers
---

{% assign menu_for_part = page.url | replace: "/", "" %}
{% include menu.html %}

Let us consider the following program that re-uses the same variable:

```raku
my $value;
dd $value;

$value = 42;
dd $value;

$value = 'fourty-two';
dd $value;
```

Every time the output is differnet and shows what kind of data the `$value` variable contains:

```
Any $value = Any
Int $value = 42
Str $value = "fourty-two"
```


{% include nav.html %}
