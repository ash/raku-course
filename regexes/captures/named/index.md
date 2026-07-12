---
title: Named captures
---

{% include menu.html %}

Numbered captures are handy, but when a pattern grows, names are clearer than numbers. To give a capture a name, write `$<name>=( … )`:

```raku
if 'Anna:30' ~~ / $<name>=(\w+) ':' $<age>=(\d+) / {
    say $<name>; # ｢Anna｣
    say $<age>;  # ｢30｣
}
```

The captured pieces are now reached by name through `$<name>` and `$<age>` instead of `$0` and `$1`. This is the same as writing `$/<name>`, because the names live inside the match variable `$/`.

Named captures make a pattern read almost like a description of the data:

```raku
if 'x=5' ~~ / $<key>=(\w+) '=' $<value>=(\w+) / {
    say "key is $<key>, value is $<value>"; # key is x, value is 5
}
```

As with positional captures, each named capture is a match object, so `$<age>.Str` gives the plain text and `$<age>.from` gives its position.

{% include nav.html %}
