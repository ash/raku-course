---
title: Konverti valorojn al teksto
---

{% include menu.html %}

Kiam ajn programo montras valoron — kiam vi `say`-as ĝin, presas ĝin, aŭ enmetas ĝin en ĉenon — tiu valoro devas esti transformita al teksto. Raku ne havas ununuran fiksan manieron fari tion. Anstataŭe, ĉiu valoro portas kelkajn normajn metodojn, ĉiu produktante ĉenon por malsama celo:

* `.gist` — homlegebla formo, tio kion `say` presas.
* `.Str` — la simpla ĉenformo, uzata en ĉenkonteksto.
* `.raku` — kodosimila formo, utila dum sencimigo.

Ĉiuj tri estas ordinaraj metodoj difinitaj por ĉiu valoro en la lingvo, do ili funkcias same por nombro, ĉeno, tabelo, aŭ via propra objekto. La sekvaj paĝoj rigardas ĉiun metodon laŭvice kaj poste helpas vin elekti la ĝustan; [la sekvanta sekcio prezentas `dd`](/eo/advanced/dd), Rakudo-ilon konstruitan sur `.raku`.

{% include nav.html %}
