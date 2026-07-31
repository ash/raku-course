---
title: Kvizo — La protokolo de iterviloj
translations_gpt:
---

{% include menu.html %}

Kiam itervilo havas neniun plian valoron por doni, kion redonas `pull-one`, kaj kiel vi testas por ĝi?

{:.quiz}
1 | `IterationEnd`, testata per `=:=`
0 | `Nil`, testata per `.defined`
0 | malplena listo `()`, testata per `==`
0 | `0`, testata per `=:=`

{% include quiz.html %}

<div class="extended-explanation">

Elĉerpita itervilo redonas la gardomarkan objekton `IterationEnd`. Ĉar ĝi estas unu sola komuna objekto, vi kontrolas ĝin laŭ idento per `=:=` (la testo pri *sama objekto*), ne laŭ valoro aŭ difiniteco. Buklo `for` uzas ĝuste ĉi tiun kontrolon por scii, kiam halti.

</div>

{% include nav.html %}
