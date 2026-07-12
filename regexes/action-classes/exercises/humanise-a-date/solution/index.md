---
title: The solution of ’Humanise a date‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
grammar Date {
    token TOP   { <year> '-' <month> '-' <day> }
    token year  { \d ** 4 }
    token month { \d ** 2 }
    token day   { \d ** 2 }
}

class Humanise {
    method year($/)  { make $/.Int }
    method month($/) { make <January February March April May June
                             July August September October November December>[$/ - 1] }
    method day($/)   { make $/.Int }
    method TOP($/)   { make "{$<day>.made} {$<month>.made} {$<year>.made}" }
}

say Date.parse('2026-07-05', actions => Humanise.new).made;
```

🦋 You can find the source code in the file [humanise-a-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/humanise-a-date.raku).

## Output

```
5 July 2026
```

## Comments

1. Unlike a plain arithmetic action, the token methods make values of **different kinds**: `year` and `day` make integers, but `month` makes a *string* by using its numeric value as an index into a list of month names. `$/ - 1` numifies the two-digit match (`07` → `7`) and shifts to a zero-based index, so `month` `07` makes `July`.

1. The `TOP` method never re-examines the raw text. It just reads the three values the sub-methods already made — `$<day>.made`, `$<month>.made`, `$<year>.made` — and interpolates them into the final string. Reading `5` back from `day` also drops the leading zero for free.

1. This is the everyday job of an action class: parse structured input once, then let each method turn its own piece into whatever the rest of the program needs.

{% include nav.html %}
