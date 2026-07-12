---
title: Transliteration
---

{% include menu.html %}

When you want to replace individual **characters** rather than a whole pattern, use the transliteration operator `tr///`. It maps each character in the first set to the character in the same position of the second set:

```raku
my $s = 'hello';
$s ~~ tr/a..z/A..Z/;
say $s; # HELLO
```

Every lowercase letter is replaced by the uppercase letter at the matching position in the second range, so the whole word is upper-cased.

The two sets are matched up character by character. A small example that shifts three letters:

```raku
my $s = 'abcabc';
$s ~~ tr/abc/xyz/;
say $s; # xyzxyz
```

Here every `a` becomes `x`, every `b` becomes `y`, and every `c` becomes `z`.

Transliteration is the right tool for character-level mappings — changing case, swapping a small alphabet, or encoding. For anything that depends on a pattern rather than single characters, use `s///`.

{% include nav.html %}
