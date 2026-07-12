---
title: The solution of ’A spaced rule‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
grammar Phrase {
    rule TOP   { <word> <word> <word> }
    token word { \w+ }
}

say Phrase.parse('the quick fox').defined;
```

🦋 You can find the source code in the file [spaced-rule.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-rule.raku).

## Output

```
True
```

## Comments

1. Because `TOP` is a `rule`, each space written between the `<word>` calls requires whitespace in the input.

1. The string `'the quick fox'` has spaces between all three words, so it parses. With a `token` for `TOP`, the spaces in the pattern would be ignored and the parse would fail.

{% include nav.html %}
