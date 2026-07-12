---
title: The solution of ’Parse a full name‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
grammar FullName {
    token TOP   { <first> ' ' <last> }
    token first { \w+ }
    token last  { \w+ }
}

say FullName.parse('Grace Hopper')<last>;
```

🦋 You can find the source code in the file [parse-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-pair.raku).

## Output

```
｢Hopper｣
```

## Comments

1. `TOP` describes the whole name; `first` and `last` describe its parts, with a literal space between them.

1. After parsing, each token is a named capture, so the last name is read as `<last>` on the match object.

{% include nav.html %}
