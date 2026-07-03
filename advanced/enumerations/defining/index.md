---
title: Defining an enum
---

{% include menu.html %}

Declare an enum with the `enum` keyword, a name, and the list of constant names:

```raku
enum Colour <red green blue>;
```

This creates a new type, `Colour`, and three constants: `red`, `green`, and `blue`. You can use the constants directly by name:

```raku
say red;   # red
say green; # green
```

Behind each name is a number, assigned automatically from zero in the order you listed them — `red` is `0`, `green` is `1`, `blue` is `2`. Because the values are ordered, you can compare the constants:

```raku
say red < blue; # True
```

A variable can be typed with the enum, so that it accepts only those constants:

```raku
my Colour $c = green;
say $c; # green
```

If a name might clash with something else in your program, you can always refer to a constant through the enum’s name with `::`:

```raku
say Colour::red; # red
```

An enum gives a set of related constants a name and a type, which makes code that uses them far clearer than bare numbers. The next topic looks at [the numbers behind the names](/advanced/enumerations/values-and-keys).

{% include nav.html %}
