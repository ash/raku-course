---
title: Parsēšana ar parse
translations_gpt:
---

{% include menu.html %}

Lai gramatiku palaistu, izsauciet tās metodi `.parse` ar analizējamo virkni:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}

my $m = Pair.parse('x=5');
say $m<key>;   # ｢x｣
say $m<value>; # ｢5｣
```

`.parse` atgriež sakritības objektu, kad gramatika sakrīt ar **visu** virkni, un `Nil`, kad nesakrīt. Tā kā jāsakrīt visai ievadei, enkuri `^` un `$` nav vajadzīgi — `.parse` šo prasību pievieno jūsu vietā:

```raku
say Pair.parse('x=5').defined; # True
say Pair.parse('x=').defined;  # False
```

[Sakritības objekts](/lv/regexes/matching/match-object) darbojas gluži tāpat kā tie, ar kuriem sastapāties agrāk. Katrs gramatikā izmantotais marķieris kļūst par nosauktu tvērumu, tāpēc `$m<key>` un `$m<value>` dod sakritušās daļas. Marķieri ligzdojas, tāpēc gramatika uzbūvē nelielu sakritību koku — vēlākas sadaļas priekšmetu.

{% include nav.html %}
