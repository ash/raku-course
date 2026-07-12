---
title: The solution of ’An upper-case action‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
grammar WordG {
    token TOP  { <word> }
    token word { \w+ }
}

class UpcaseAction {
    method TOP($/) { make $<word>.Str.uc }
}

say WordG.parse('hello', actions => UpcaseAction.new).made;
```

🦋 You can find the source code in the file [upcase-action.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/upcase-action.raku).

## Output

```
HELLO
```

## Comments

1. The grammar captures the word; the action class decides what to do with it.

1. `$<word>.Str` gives the matched text and `.uc` upper-cases it, and that is what `make` stores on the match.

{% include nav.html %}
