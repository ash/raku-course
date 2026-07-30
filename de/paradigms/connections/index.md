---
title: Verbindungen in die Ferne aufbauen
translations_gpt:
---

{% include menu.html %}

Der letzte Unterteil des Kurses wendet sich der _Web_-Programmierung zu — dem Sprechen mit anderen Maschinen über das Netz. Wir bauen von unten auf: eine rohe Netzverbindung, dann ein einfacher HTTP-Client, ein einfacher HTTP-Server und schließlich ein Blick auf das Cro-Framework.

Anders als der Rest des Kurses brauchen diese Beispiele eine **Netzverbindung**, um zu laufen, und die späteren brauchen Module, die Sie selbst installieren. Der Code ist so geschrieben, dass er übersetzt und funktioniert, wenn Sie ihn gegen einen echten Server laufen lassen, doch seine Ausgabe lässt sich nicht so zeigen wie bei den Beispielen ohne Netz. Jede Seite vermerkt, was sie braucht.

Wir beginnen mit dem Fundament allen Netzcodes: einem _Socket_, der Zweiwegleitung zwischen zwei Programmen über ein Netz.

{% include nav.html %}
