---
title: Analizi per parse
translations_gpt:
---

{% include menu.html %}

Por ruli gramatikon, voku ĝian metodon `.parse` kun la ĉeno por analizi:

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

`.parse` redonas kongruan objekton, kiam la gramatiko kongruas kun la **tuta** ĉeno, kaj `Nil`, kiam ne. Ĉar la tuta enigo devas kongrui, ne necesas ankroj `^` kaj `$` — `.parse` aldonas tiun postulon por vi:

```raku
say Pair.parse('x=5').defined; # True
say Pair.parse('x=').defined;  # False
```

La [kongrua objekto](/eo/regexes/matching/match-object) funkcias ĝuste kiel tiuj, kiujn vi renkontis pli frue. Ĉiu ĵetono uzata en la gramatiko fariĝas nomita kapto, do `$m<key>` kaj `$m<value>` donas la kongruintajn partojn. La ĵetonoj nestiĝas, do gramatiko konstruas malgrandan arbon de kongruoj — la temo de posta sekcio.

{% include nav.html %}
