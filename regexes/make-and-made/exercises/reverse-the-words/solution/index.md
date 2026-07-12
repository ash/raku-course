---
title: The solution of ’Reverse the words‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
grammar Phrase {
    token TOP  { <word> [ ' ' <word> ]* { make $<word>».made.join(' ') } }
    token word { \w+ { make $/.flip } }
}

say Phrase.parse('hello world').made;
```

🦋 You can find the source code in the file [reverse-the-words.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/reverse-the-words.raku).

## Output

```
olleh dlrow
```

## Comments

1. Each `word` token makes its own reversed text: its inline block runs whenever a word matches, and `make $/.flip` stores the word — `$/` is the current match — spelled backwards.

1. `TOP` matches the words with `<word> [ ' ' <word> ]*` — one word, then any number of “space then word” — and combines them. `$<word>` is the list of every word match; `».made` pulls out the reversed text each one stored, and `.join(' ')` rebuilds the phrase with spaces.

1. That “item, then item, then item…” shape is common enough to have a shorthand: the `%` separator. Writing `<word>+ % ' '` means “one or more `<word>`, separated by a space”, and matches exactly the same phrases as `<word> [ ' ' <word> ]*` — just more compactly.

1. So `make` and `made` work at two levels here: the small pieces make their values, and the whole is made from them. Reading `.made` on the result gives `olleh dlrow`.

{% include nav.html %}
