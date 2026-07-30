---
title: 'Lösung: Initiale und Nachname'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
if 'J Smith' ~~ / $<initial>=(\w) ' ' $<surname>=(\w+) / {
    say ~$<surname>;
}
```

🦋 Du findest den Quellcode in der Datei [initial-and-surname.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/initial-and-surname.raku).

## Ausgabe

```
Smith
```

## Kommentare

1. `$<initial>=(\w)` capturt ein einzelnes Wortzeichen; `$<surname>=(\w+)` capturt die Buchstabenfolge nach dem Leerzeichen.

1. Der Nachname wird dann namentlich als `$<surname>` zurückgelesen, und das Präfix `~` gibt ihn als blanke Zeichenkette aus; ohne es würde `say $<surname>` das Match-Objekt als `｢Smith｣` zeigen.

{% include nav.html %}
