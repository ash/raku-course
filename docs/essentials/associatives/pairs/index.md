---
title: Pairs
---

{% include menu.html %}

A pair is a data structure that keeps a name and a value. They form a solid object which can be stored in a scalar variable. Here is an example of how you create a pair:

```raku
my $pair = name => 'Anna';
```

The type of the variable `$pair` is `Pair`:

```raku
say $pair.WHAT; # (Pair)
```

It is possible to access the name and the value separately by using the corresponding methods `key` and `value`:

```raku
say $pair.key; # name
say $pair.value; # Anna
```

An important feature of pairs is they are immutable objects. It means that you cannot assign a new value or give a new name to an existing pair. But you can assign a completely new pair to the same variable, of course:

```raku
my $pair = name => 'Anna';
$pair = name => 'John';
say $pair.value; # John
```

## Subscripting

There is another method of reading the value of a pair. You can subscript it with the name of its key between angle brackets. This is how you do that:

```raku
say $pair<name>;
```

Notice that there is no need to quote the name of the key if it contains no spaces. If it does, things become a bit stricter:

```raku
my $pair = 'employee name' => 'Julie Madelon';
say $pair{'employee name'};
```

Do not miss the fact that curly braces are used this time.

{% include nav.html %}
