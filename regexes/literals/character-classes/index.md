---
title: Character classes
---

{% include menu.html %}

Often you do not want to match one fixed character but any character out of a set. Such a set is called a _character class_ and is written between `<[` and `]>`:

```raku
say 'grey' ~~ / gr <[ae]> y /; # ｢grey｣
say 'gray' ~~ / gr <[ae]> y /; # ｢gray｣
```

The class `<[ae]>` matches a single character that is either `a` or `e`, so both spellings of the colour — or color, if you prefer — match.

Inside the brackets you can list a _range_ with two dots:

```raku
say 'a1b2' ~~ / <[0..9]> /; # ｢1｣
```

`<[0..9]>` matches any one digit; the first digit in the string is `1`.

To match any character that is **not** in the set, put a minus sign right after the opening bracket:

```raku
say 'stop!' ~~ / <-[a..z]> /; # ｢!｣
```

Here `<-[a..z]>` matches the first character that is not a lowercase letter, which is the exclamation mark.

You can combine several pieces in one class. For example, `<[a..z A..Z 0..9]>` matches a letter or a digit. The spaces there are only for readability — as everywhere in a regex, spaces inside `<[…]>` are ignored, so `<[a..zA..Z0..9]>` is exactly the same class.

{% include nav.html %}
