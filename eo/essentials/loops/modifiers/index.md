---
title: while kaj until kiel deklaraj modifiloj
---

{% include menu.html %}

Ambaŭ `while` kaj `until` povas esti uzataj en la formo de deklaraj modifiloj ([simile](/eo/essentials/conditional-checks/modifiers) al `if` kaj `unless`).

Konsideru ekzemplon kiu imitas modulan dividadon:

```raku
my $x = 10;
$x -= 3 while $x > 2;
say $x; # 1
```

Ĉi tie, `-=` estas la operatoro kiu kombinas subtrahon kaj asignon. En ĉi tiu kazo, `$x -= 3` estas ekvivalenta al `$x = $x - 3`.

La `while` modifilo permesas la deklaron `$x -= 3` ripetiĝi dum la kondiĉo `$x > 2` restas `True`. Tuj kiam ĝi fariĝas `False`, la buklo haltas.

Rimarku ke se la kondiĉo estas `False` komence, la deklaro ne estas plenumita entute.

La sama programo povas esti reskribita kun `until`. Por ĉi tio, la kondiĉo devas esti inversigita:

```raku
my $x = 10;
$x -= 3 until $x <= 2;
say $x; # 1
```

{% include nav.html %}