---
title: '`WHO` and `HOW`'
---

{% include menu.html %}

Two more introspection tools complete the set: `HOW` and `WHO`.

## `HOW`

Every value in Raku is backed by a _metaobject_ — an object that knows how the value’s type works. `HOW` (short for _Higher Order Workings_) returns that metaobject:

```raku
my $x = 42;
say $x.HOW.^name; # Perl6::Metamodel::ClassHOW
```

You have been using the metaobject all along, perhaps without noticing. The `.^` in `.^name` is a method call routed through `HOW`. These two lines are equivalent:

```raku
my $x = 42;
say $x.^name;        # Int
say $x.HOW.name($x); # Int
```

So `$x.^name` is just a shorter way of writing `$x.HOW.name($x)`. Notice that the object is passed in again as an argument: the metaobject is *shared* by every value of the type, so a meta-method is told which object it is being asked about. The `.^` form does this for you automatically. (For `name` the argument happens to be ignored, but passing it is the correct, general form — some meta-methods do use it.)

The same applies to other meta-methods you may meet, such as `.^methods`, which lists the methods a value responds to.

## `WHO`

`WHO` returns the _package_ that a name belongs to — the table of symbols defined in that namespace:

```raku
say Int.WHO.^name; # Stash
```

A `Stash` (a symbol-table hash) becomes useful when you work with modules, where it lets you look up the names a module defines. We will return to it in [the section about modules](/advanced/module-introspection); for now, it is enough to know that `WHO` exists and what it represents.

{% include nav.html %}
