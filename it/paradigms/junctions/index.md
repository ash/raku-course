---
title: Junction
translations_gpt:
---

{% include menu.html %}

Questa sottoparte passa alla programmazione _concorrente_ — fare più di una cosa per volta. Raku ha per questo un armamentario ricco e amichevole: junction, thread, promise e channel. Cominciamo dal più gentile di essi, la _junction_.

Una junction è un unico valore che contiene **parecchi** valori insieme, uniti da una relazione logica: _uno qualunque_ di essi, _tutti_, _esattamente uno_ oppure _nessuno_. Quando usi una junction in un confronto, Raku mette alla prova ogni valore dietro di essa e combina i risultati. Questo sostituisce spesso un intero ciclo con un'unica espressione — e, sotto il cofano, le prove possono girare in parallelo.

Ai primi tempi del linguaggio le junction andavano sotto un altro nome: _sovrapposizioni quantistiche_ — un cenno al modo in cui un valore può contenere molte possibilità insieme, un po' come una particella nella fisica quantistica.

{% include nav.html %}
