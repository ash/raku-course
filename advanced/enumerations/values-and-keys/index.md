---
title: Values and keys
---

{% include menu.html %}

Each enum constant carries both a name and a number. The `.value` method gives the number, and the `.key` method gives the name as a string:

```raku
enum Colour <red green blue>;

say green.value; # 1
say green.key;   # green
```

You do not have to accept the automatic numbering from zero. Write the constants as pairs to choose the values yourself:

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Tue.value; # 2
say Fri.value; # 5
```

Here the working week is numbered from one instead of zero.

The enum type itself can list all of its constants. The `.enums` method returns a map from each name to its value:

```raku
enum Colour <red green blue>;

say Colour.enums;       # Map.new((blue => 2, green => 1, red => 0))
say Colour.enums.elems; # 3
```

Between `.value`, `.key`, and `.enums`, you can move freely from a constant to its number, from a number back to data, and over the whole set — which is what makes enums useful for things like menus, states, and lookup tables.

{% include nav.html %}
