---
title: Funktionen höherer Ordnung
translations_gpt:
---

{% include menu.html %}

In Raku ist eine Subroutine ein gewöhnlicher Wert: Sie können sie in einer Variablen ablegen, sie einer anderen Subroutine übergeben und sie als Ergebnis zurückliefern. Eine Subroutine, die eine andere Subroutine **aufnimmt** oder **zurückgibt**, heißt _Funktion höherer Ordnung_, und sie ist das Herz der funktionalen Programmierung.

Funktionen höherer Ordnung haben Sie schon verwendet, ohne sie so zu nennen — `map`, `grep` und `sort` nehmen alle einen Codeblock als Argument. Dieser Abschnitt zeigt, wie Sie eigene schreiben.

Diese blockannehmenden Methoden sind auch ein natürlicher Ort für die Form mit _Doppelpunkt_, die Ihnen erlaubt, die Klammern wegzulassen — `(1..10).grep: * %% 2` statt `(1..10).grep(* %% 2)`. Sie wird in [Aufrufen mit Doppelpunkt](/de/advanced/colon-calls) eingeführt, und die Abkürzung `*`, die sie verwendet, ist der [Whatever-Stern](/de/advanced/whatever).

{% include nav.html %}
