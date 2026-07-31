---
title: La ŝlosilvorto grammar
translations_gpt:
---

{% include menu.html %}

_Gramatiko_ grupigas nomitajn regulesprimojn sub unu nomo, multe kiel klaso grupigas metodojn. Vi deklaras ĝin per la ŝlosilvorto `grammar`:

```raku
grammar Greeting {
    token TOP  { 'Hello, ' <name> '!' }
    token name { \w+ }
}
```

Ene de la gramatiko, ĉiu nomita ŝablono estas skribata per `token` (speco de regulesprimo, kiun vi studos detale baldaŭ). Unu ĵetono, laŭ konvencio nomata `TOP`, estas la deirpunkto — ĝi priskribas la tutaĵon. Ĉi tie `TOP` diras «la teksto estas `Hello, `, poste nomo, poste `!`», kaj `name` diras, kiel nomo aspektas.

La ĵetonoj povas referenci unu la alian laŭ nomo, ekzakte kiel la [nomitaj regulesprimoj](/eo/regexes/what-is-a-grammar/named-regexes) de la antaŭa temo. `TOP` uzas `<name>`, kio tenas la gramatikon legebla: ĉiu regulo havas unu klaran laboron.

Por ruli gramatikon kontraŭ ĉeno, voku ĝian metodon `.parse`:

```raku
my $m = Greeting.parse('Hello, Anna!');
say $m<name>; # ｢Anna｣
```

La sekva sekcio rigardas `TOP` kaj `.parse` pli detale. Nun, la ideo por kunporti estas simpla: **gramatiko estas nomita kolekto de nomitaj regulesprimoj, kiuj kune priskribas tutan pecon de strukturita teksto.**

{% include nav.html %}
