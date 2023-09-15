---
title: Arrays
---

{% include menu.html %}

Arrays are aggregate data types that can keep more than one value. That differs arrays from [scalar items](/essentials/scalar-variables). Array elements can be indexed (or _subscripted_). In other words, its elements have a position (which explains the general name for this kind of data: positionals).

Array variables use another kind of sigil: `@`. The rules for the variable name are the same as [for scalars](/essentials/scalar-variables/identifiers/).

```raku
my @cities;
```

So far, the array named `@cities` has been created. You can fill it with some values:

```raku
@cities = 'Paris', 'Rome', 'Berlin';
```

Alternatively, it is possible to initialise the values immediately:

```raku
my @cities = 'Paris', 'Rome', 'Berlin';
```

## Indexing

To access a single item of an array, use a pair of brackets that you place after the name of the variable:

```raku
say @cities[1];
```

Notice that the sigil always stays the same. As elements are counted from zero, the element `@cities[1]` is `'Rome'` in our example.

Arrays are mutable, so you can easily modify the items of it by simply assigning a new value to them:

```raku
@cities[0] = 'Rome';
@cities[1] = 'Paris';
```

After this, the statement `say @cities[1]` will print the new value `'Paris'`.

## Size

To get the current length of an array, or, in other words, the number of its elements, use the `elems` method:

```raku
say @cities.elems; # 3
```

If the array appears in a context, where the expected parameter is a number, the return value is the size of the array:

```raku
say +@cities; # 3
```

Here, the [`+` prefix operator](/essentials/coercion/prefixes) requires a numeric value from its argument, so the result of `+@cities` is `3`.

{% include nav.html %}
