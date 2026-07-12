---
title: The solution of ’Parse a hashtag‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
grammar Hashtag {
    token TOP { '#' <tag> }
    token tag { \w+ }
}

say Hashtag.parse('#raku')<tag>;
```

🦋 You can find the source code in the file [parse-hashtag.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-hashtag.raku).

## Output

```
｢raku｣
```

## Comments

1. `TOP` spells out the fixed `#` followed by the `<tag>` token.

1. `.parse` requires the whole string to match, and the tag is then available as the `<tag>` capture.

## An alternative

You can instead let `tag` match the whole hashtag — the `#` together with the word — and reach the word through a nested `word` rule:

```raku
grammar Hashtag {
    token TOP  { <tag> }
    token tag  { '#' <word> }
    token word { \w+ }
}

say Hashtag.parse('#raku')<tag><word>;
```

This prints the same `｢raku｣`. Now `<tag>` captures the entire `#raku`, while the word inside it is reached as `<tag><word>`. The grammar reads a little more like the thing it describes — a hashtag *is* a `#` followed by a word, and the word is a named piece in its own right.

{% include nav.html %}
