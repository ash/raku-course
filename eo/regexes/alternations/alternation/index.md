---
title: Alternativo
translations_gpt:
---

{% include menu.html %}

Apartigu du aŭ pli da alternativoj per vertikala streko `|`. La ŝablono kongruas, se **iu ajn** el ili kongruas:

```raku
say 'no thanks' ~~ / yes | no /; # ｢no｣
```

La ŝablono provis `yes` kaj `no`; la ĉeno enhavas `no`, do tio estas, kio kongruis.

Vi povas listigi tiom da alternativoj, kiom vi volas:

```raku
say 'the sky is blue' ~~ / red | green | blue /; # ｢blue｣
```

Alternativoj povas esti ajna subŝablono, ne nur laŭliteraj vortoj — ili povas enhavi signoklasojn, kvantorojn kaj kaptojn. Por teni alternativon kune ene de pli granda ŝablono, grupigu ĝin per rektaj krampoj `[ ]`, kiuj [grupigas **sen** kapti](/eo/regexes/captures/non-capturing):

```raku
say 'cathouse' ~~ / [ cat | dog ] house /; # ｢cathouse｣
```

Ĉi tie la alternativo `cat | dog` estas unu unuo, kaj ĝi devas esti sekvata de `house`.

{% include nav.html %}
