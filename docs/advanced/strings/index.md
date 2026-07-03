---
title: Strings
---

{% include menu.html %}

In the Essentials part you learned [how to build strings](/essentials/strings) — concatenation, interpolation, and the length of a string. Strings also carry a rich set of methods. This section collects the most useful ones. (Searching with [regular expressions](/regexes) is a separate, larger topic, covered in its own part later.)

Three methods change the letter case of a string:

```raku
say 'raku'.uc; # RAKU  — upper case
say 'RAKU'.lc; # raku  — lower case
say 'raku'.tc; # Raku  — title case (first letter capitalised)
```

The `flip` method reverses the characters of a string:

```raku
say 'Raku'.flip; # ukaR
```

And the `x` operator repeats a string a given number of times:

```raku
say 'ab' x 3; # ababab
```

The following topics show how to search inside strings and how to split them into parts and join them back together.

{% include nav.html %}
