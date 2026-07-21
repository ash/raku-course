---
title: The solution of ’Caesar cipher‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $text = 'HELLO';

$text ~~ tr/A..Z/D..ZA..C/;

say $text;
```

🦋 You can find the source code in the file [caesar-cipher.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/caesar-cipher.raku).

## Output

```
KHOOR
```

## Comments

1. The transliteration operator `tr///` maps characters from the first set to the
second, position by position. `A..Z` lines up against `D..ZA..C`, so `A` becomes
`D`, `B` becomes `E`, and the tail `X Y Z` wraps back to `A B C`.

1. `tr///` changes the string in place, so `$text` itself holds the encrypted word
after the match.

{% include nav.html %}
