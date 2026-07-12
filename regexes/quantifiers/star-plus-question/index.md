---
title: Star, plus, and question mark
---

{% include menu.html %}

Three symbols cover the most common cases. Each one applies to the item right before it:

* `*` — zero or more times
* `+` — one or more times
* `?` — zero or one time (optional)

The plus sign matches a run of one or more characters:

```raku
say 'aaah' ~~ / a+ /; # ｢aaa｣
```

It matched as many `a`s as it could — three of them.

The star is like the plus but also succeeds when there is nothing to match, because zero repetitions are allowed:

```raku
say 'colour' ~~ / colou*r /; # ｢colour｣
say 'color'  ~~ / colou*r /; # ｢color｣
```

The question mark makes a piece optional — it matches whether or not the piece is there:

```raku
say 'colour' ~~ / colou?r /; # ｢colour｣
say 'color'  ~~ / colou?r /; # ｢color｣
```

Quantifiers apply to whatever comes immediately before them, including a character class. For example, `\d+` matches a run of one or more digits — a whole number:

```raku
say 'order 66' ~~ / \d+ /; # ｢66｣
```

{% include nav.html %}
