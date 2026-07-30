---
title: Kontexte
---

{% include menu.html %}

Ein Wert in Raku kann sich manchmal unterschiedlich verhalten, da er sich an den _Kontext_ anpasst, in dem er verwendet wird. Zum Beispiel kann dasselbe Array als Zahl (seine Länge), als String (seine verbundenen Elemente) oder als Wahrheitswert (ob das Array leer ist oder nicht) fungieren, je nachdem, was der umgebende Code verlangt.

Das Verständnis von Kontexten erklärt vieles in Raku, was sonst überraschend wirken würde: warum `+@array` eine Zahl ist, warum ein Array in einem Skalar sich als einzelnes Element verhält und warum `if @array` auf Leerheit prüft. Dieser Abschnitt behandelt die wichtigsten Kontexte.

{% include nav.html %}
