---
title: Duoblaj sigeloj
translations_gpt:
---

{% include menu.html %}

_Tvigilo_ estas signo metita inter la sigelo kaj la nomo de variablo. Ĝi ne ŝanĝas la nomon; ĝi ŝanĝas kiel la variablo kondutas kaj estas solvata. La oftaj estas:

* `*` — **dinamika** variablo, ekz. `$*OUT`, serĉata tra la voka stako
* `?` — **kompiltempa** valoro provizita de la kompililo, ekz. `$?FILE`, `$?LINE`
* `!` — **privata** atributo de objekto, ekz. `$!balance`
* `.` — atributo atingita per ĝia aliriga metodo, ekz. `$.name`

Vi jam renkontis kelkajn el ĉi tiuj sen nomi la tvigilon: `$*OUT` kaj `$*IN` (dinamikaj), kaj `$!`/`$.` en [la parto pri objektoj](/eo/oop).

La kompilile provizitaj `?`-variabloj estas plenigitaj dum via programo estas kompilata:

```raku
say $?LINE; # the line number of this statement
say $?FILE; # the path of this source file
```

Ĉiu tvigilo signalas malsaman specon de variablo unuavide, do legante `$*foo` vi tuj scias, ke ĝi estas dinamika, kaj `$?foo`, ke ĝi estas kompiltempa konstanto. La sekva temo rigardas detale [dinamikajn variablojn](/eo/advanced/special-variables/dynamic-variables), ĉar ili kondutas tre malsame ol la leksikaj variabloj, kiujn vi uzis ĝis nun.

{% include nav.html %}
