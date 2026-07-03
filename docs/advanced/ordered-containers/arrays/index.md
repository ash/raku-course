---
title: Arrays
---

{% include menu.html %}

An array is an ordered container whose elements are themselves scalar containers.

```raku
my @array = 100, 200, 300;
my @letters = 'a', 'b', 'c';
```

The `@` sigil indicates that such a variable behaves as a `Positional` object, so you can subscript it to access individual elements:

```raku
say @array[1];   # 200
say @letters[2]; # c
```

Because every element is a scalar container, you can assign a new value to it, exactly as you would with a standalone scalar variable:

```raku
my @array = 100, 200, 300;
@array[0] = 10;
say @array; # [10 200 300]
```

You can also assign a value of a different type, for example:

```raku
my @array = 100, 200, 300;
@array[0] = 'ten';
say @array; # [ten 200 300]
```

This is what makes arrays _mutable_: each slot is a container that can receive a new value. As you will see in the next topic, [lists](/advanced/ordered-containers/lists) behave differently.

{% include nav.html %}
