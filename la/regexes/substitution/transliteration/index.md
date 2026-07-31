---
title: Transliteratio
translations_gpt:
---

{% include menu.html %}

Cum singulas **litteras** potius quam totum exemplar permutare vis, utere operatore transliterationis `tr///`. Unamquamque litteram primae seriei ad litteram eodem loco secundae seriei attribuit:

```raku
my $s = 'hello';
$s ~~ tr/a..z/A..Z/;
say $s; # HELLO
```

Omnis littera minuscula littera maiuscula loco conveniente in secundo intervallo substituitur, itaque totum verbum maiusculum fit.

Duae series littera post litteram inter se attribuuntur. Exemplum parvum quod tres litteras movet:

```raku
my $s = 'abcabc';
$s ~~ tr/abc/xyz/;
say $s; # xyzxyz
```

Hic omnis `a` `x` fit, omnis `b` `y`, et omnis `c` `z`.

Transliteratio instrumentum rectum est pro attributionibus in litterarum gradu — magnitudinem mutare, alphabetum parvum permutare, vel encodere. Pro quolibet quod ab exemplari potius quam a singulis litteris pendet, utere `s///`.

{% include nav.html %}
