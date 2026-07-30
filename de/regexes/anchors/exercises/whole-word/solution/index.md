---
title: 'Lösung: Ein ganzes Wort'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say 'this is fine' ~~ /<< is >>/;
```

🦋 Du findest den Quellcode in der Datei [whole-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/whole-word.raku).

## Ausgabe

```
｢is｣
```

## Kommentare

1. Die Anker `<<` und `>>` verlangen auf beiden Seiten von `is` eine Wortgrenze.

1. Die Buchstaben `is` stecken auch in `this`, dort haben sie aber links keine Wortgrenze, die Maschine überspringt dieses Vorkommen also und trifft stattdessen das allein stehende Wort `is`.

1. Beide Kandidaten geben dasselbe `｢is｣` aus — woher wissen Sie also, welcher tatsächlich getroffen hat? Ändern Sie das in `this` versteckte `is` — machen Sie etwa `'thus is fine'` aus der Zeichenkette. Die Ausgabe bleibt unverändert `｢is｣`, was beweist, dass jenes Vorkommen nie der Treffer war. Ändern Sie nun stattdessen das allein stehende Wort (sagen wir `'this it fine'`), und der Treffer verschwindet (`Nil`). Sie können den Treffer auch fragen, wo er beginnt: `('this is fine' ~~ /<< is >>/).from` liefert `5`, die Position des allein stehenden `is`, und nicht `2`.

{% include nav.html %}
