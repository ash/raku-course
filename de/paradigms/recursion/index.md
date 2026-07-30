---
title: Rekursion
translations_gpt:
---

{% include menu.html %}

Dieser Teil des Kurses geht über das Alltägliche hinaus und betrachtet drei mächtige Programmierstile, die Raku besonders gut unterstützt — den _funktionalen_, den _nebenläufigen_ und den _reaktiven_ — und setzt sie dann ein, um Webdienste zu bauen.

Wir beginnen mit der funktionalen Programmierung — einem Stil, der um Subroutinen herum aufgebaut ist, die andere Subroutinen aufnehmen und zurückgeben, um Werte, die erst berechnet werden, wenn man sie braucht, und um Ausdrücke statt schrittweiser Anweisungen. Der erste Gedanke ist die _Rekursion_: eine Subroutine, die sich selbst aufruft.

Eine rekursive Subroutine löst ein Problem, indem sie es auf eine kleinere Fassung desselben Problems zurückführt, bis das Problem klein genug ist, um es unmittelbar zu beantworten. Herunterzählen, durch einen Baum gehen, eine Fakultät berechnen — all das ist von Natur aus rekursiv. Dieser Abschnitt zeigt, wie man eine rekursive Subroutine schreibt und, ebenso wichtig, wie man sie anhält.

{% include nav.html %}
