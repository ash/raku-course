---
title: The solution of ’Censor a word‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $s = 'secret secret plan';
$s ~~ s:g/secret/***/;
say $s;
```

🦋 You can find the source code in the file [censor-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/censor-word.raku).

## Output

```
*** *** plan
```

## Comments

1. The `s///` operator replaces the matched `secret` with the literal text `***`, written without quotes, and changes `$s` in place.

1. The `:g` adverb is what makes it replace **both** occurrences. Without it, only the first `secret` would be censored.

{% include nav.html %}
