---
title: Hashes
---

{% include menu.html %}

A _hash_ is another example of associative data types in Raku. It is an aggregate data type that maps the names of its items to their values. Let us introduce the new sigil that hash variables use: `%`.

```raku
my %capitals;
```

You can now use the hash and assign some initial values to it.

```raku
%capitals = France => 'Paris', Italy => 'Rome';
```

As with other data types, both actions can be done together:

```raku
my %capitals = France => 'Paris', Italy => 'Rome';
```

## Accessing the elements

Subscripting the elements is similar to what we’ve seen for [pairs](../pairs). Use a pair of angle brackets or curly braces with a string:

```raku
say %capitals<France>;
say %capitals{'Italy'};
```

Hashes are mutable, so you can both change the existing values as well as add the new ones:

```raku
%capitals<Germany> = 'Berlin';
```

## Keys and values

The two built-in methods, `keys` and `values`, return the lists of the keys and the values of a hash:

```raku
say %capitals.keys;
say %capitals.values;
```

Here is an example of the output of this program:

    (Germany Italy France)
    (Berlin Rome Paris)

Notice that hash elements are not ordered, but the order of the keys and values, returned by the above methods, is identical.

{% include nav.html %}