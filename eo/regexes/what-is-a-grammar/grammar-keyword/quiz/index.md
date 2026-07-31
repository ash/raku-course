---
title: Kvizo — Kio estas gramatiko
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
my token greet { 'hi' }

say so 'hi there' ~~ / <greet> /;
```

{:.quiz}
1 | True
0 | False
0 | ｢greet｣
0 | hi

{% include quiz.html %}

<div class="extended-explanation">

La nomita ĵetono `greet` kongruas kun la laŭlitera teksto `hi`. Voki ĝin kiel `<greet>` ene de la ŝablono serĉas tiun tekston, kiu ĉeestas ĉe la komenco de `'hi there'`, do la kongruo sukcesas kaj `so` redonas `True`.

</div>

{% include nav.html %}
