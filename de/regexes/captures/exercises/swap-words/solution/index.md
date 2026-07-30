---
title: 'Lösung: Nachname zuerst'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
if 'Grace Hopper' ~~ / (\w+) ' ' (\w+) / {
    say "$1, $0";
}
```

🦋 Du findest den Quellcode in der Datei [swap-words.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/swap-words.raku).

## Ausgabe

```
Hopper, Grace
```

## Kommentare

1. Vor- und Nachname werden in `$0` und `$1` gecapturt.

1. Innerhalb einer Zeichenkette mit doppelten Anführungszeichen wird jedes Capture als sein getroffener Text interpoliert. `"$1, $0"` auszugeben stellt den Nachnamen voran, gefolgt von einem wörtlichen Komma samt Leerzeichen und dann dem Vornamen.

{% include nav.html %}
