---
title: The solution of ’Validate identifiers‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
for <count total2 2fast my-var _hidden> -> $name {
    my $ok = $name ~~ / ^ <[A..Za..z_]> <[A..Za..z0..9_]>* $ /;

    say "$name: { $ok ?? 'valid' !! 'invalid' }";
}
```

🦋 You can find the source code in the file [validate-identifier.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/validate-identifier.raku).

## Output

```
count: valid
total2: valid
2fast: invalid
my-var: invalid
_hidden: valid
```

## Comments

1. The anchors `^` and `$` force the pattern to cover the *whole* string, so a
single stray character like the hyphen in `my-var` makes it invalid.

1. The first character class allows a letter or underscore; the second, repeated
with `*`, additionally allows digits — matching the classic identifier rule exactly.

1. The second class can also be written as `\w`, the built-in shorthand for a
word character (a letter, a digit, or an underscore):

    ```raku
    my $ok = $name ~~ / ^ <[A..Za..z_]> \w* $ /;
    ```

    One difference to be aware of: `\w` in Raku is Unicode-aware, so a name such
as `café` also passes — which happens to match Raku itself, where
`my $café = 1;` is perfectly legal. The spelled-out class
`<[A..Za..z0..9_]>` keeps the check strictly ASCII.

1. There is a twist, though: in Raku itself `my-var` is a *valid* identifier!
Raku allows a hyphen (or an apostrophe, as in `isn't`) inside a name, as long as
it is followed by a letter — which is why subroutines like `is-prime` read so
naturally. To validate *Raku* identifiers, allow such groups after the classic
part:

    ```raku
    for <count total2 2fast my-var _hidden> -> $name {
        my $ok = $name ~~ / ^ <[A..Za..z_]> \w* [ '-' <[A..Za..z]> \w* ]* $ /;

        say "$name: { $ok ?? 'valid' !! 'invalid' }";
    }
    ```

    Each bracketed group `[ '-' <[A..Za..z]> \w* ]` accepts a hyphen only when a
letter follows, so `my-var` is now reported as valid, while `2fast` — and
strings like `a-` or `a-1` — still are not.

{% include nav.html %}
