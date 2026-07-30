---
title: Die TOP-Regel
translations_gpt:
---

{% include menu.html %}

Wenn Sie eine Zeichenkette mit einer Grammatik zerlegen, beginnt Raku bei einem Token namens `TOP`. Es ist der Einstiegspunkt — die Beschreibung der **gesamten** Eingabe. Alles andere in der Grammatik dient dazu, es zu stützen.

Ein `TOP`-Token ruft üblicherweise andere Tokens namentlich auf und zerlegt das Problem so in kleinere Teile:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}
```

Lesen Sie `TOP` laut: „ein Schlüssel, dann ein Gleichheitszeichen, dann ein Wert“. Die Tokens `key` und `value` sagen, wie jeder dieser Teile aussieht. Diese Aufteilung ist der ganze Sinn einer Grammatik — jedes Token hat eine kleine, klar benannte Aufgabe, und `TOP` setzt sie zusammen.

`TOP` ist lediglich eine Übereinkunft, die `.parse` durchsetzt; die übrigen Tokens dürfen heißen, wie Sie möchten. Die von Ihnen gewählten Namen werden zugleich zu den benannten Captures im Ergebnis, eine gut benannte Grammatik erzeugt also einen sich selbst erklärenden Match-Baum, wie Sie gleich sehen werden.

{% include nav.html %}
