---
title: "Quiz — Pragma's"
translations_gpt:
---

{% include menu.html %}

Wat gebeurt er, met Raku's standaard pragma `strict` van kracht, als je toekent aan een variabele die je nooit gedeclareerd hebt, zoals in `$x = 42`?

{:.quiz}
1 | Het is een compilatiefout
0 | Het maakt stilzwijgend `$x` aan
0 | Het drukt een waarschuwing af maar draait
0 | Het zet `$x` op `Nil`

{% include quiz.html %}

<div class="extended-explanation">

`strict` staat standaard aan en eist dat elke variabele eerst met `my` gedeclareerd wordt, dus een kale `$x = 42` compileert niet — *Variable '$x' is not declared*. Het pragma uitzetten met `no strict` zou de toekenning wel toelaten.

</div>

{% include nav.html %}
