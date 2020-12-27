---
title: Hashes
---

{% include menu.html %}

Another example of associative data types in Raku are hashes. This is an aggregate data type that maps the names of its items to their values. Let us introduce the new sigil that hash variables use: `%`.

    my %capitals;

You can now use the hash and assign some initial values to it.

    %capitals = France => 'Paris', Italy => 'Rome';

As with other data types, both actions can be done together:

    my %capitals = France => 'Paris', Italy => 'Rome';

## Accessing elements

Subscripting key elements is similar to what we’ve seen for [pairs](../pairs). Use a pair of angle brackets or curly braces:

    say %capitals<France>;
    say %capitals{'Italy'};

Hashes are immutable, so you can both change the existing values and add the new ones:

    %capitals<Germany> = 'Berlin';

## Keys and values

The two built-in methods, `keys` and `values`, return the lists of the keys and the values of a hash:

    say %capitals.keys;
    say %capitals.values;

Here is an example of the output of this program:

    (Germany Italy France)
    (Berlin Rome Paris)

Notice that hash elements are not ordered, but the order of the keys and values, returned by the above methods, is identical.

{% include nav.html %}
