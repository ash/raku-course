---
title: The match object
---

{% include menu.html %}

When a regex matches, the smartmatch returns a _match object_. The same object is also stored automatically in the special variable `$/`, which is sometimes called “the match variable”.

The match object is much more than a yes-or-no answer. As a string, it is the text that matched — either with the `.Str` method or with the prefix `~`, which is the string-coercion operator and does exactly the same thing:

```raku
my $m = 'concatenate' ~~ /cat/;
say $m.Str; # cat
say ~$m;    # cat
```

It also knows **where** in the string the match was found. The `.from` method gives the position where it starts, and `.to` gives the position just after it ends:

```raku
my $m = 'room 7 left' ~~ /\d/;
say $m.Str;  # 7
say $m.from; # 5
say $m.to;   # 6
```

Positions are counted from zero, so the digit `7` sits at index `5`.

When the regex does **not** match, the result is not a match object at all — it is the special value `Nil`. Assigning `Nil` to a scalar leaves it undefined:

```raku
my $m = 'abc' ~~ /z/;
say $m.defined; # False
```

So you can always check `.defined` (or just use the value in a Boolean context) before reading the matched text.

{% include nav.html %}
