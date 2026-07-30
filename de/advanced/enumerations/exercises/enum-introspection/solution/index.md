---
title: 'Solution: Zählen und Summieren'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
enum Coin (penny => 1, nickel => 5, dime => 10, quarter => 25);

say Coin.enums.elems;
say Coin.enums.values.sum;
```

🦋 Du findest den Quellcode in der Datei [enum-introspection.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/enum-introspection.raku).

## Ausgabe

```
4
41
```

## Kommentare

1. Die Konstanten sind als Paare definiert, sodass jede den von uns gewählten Wert erhält, anstatt die automatische Nummerierung ab Null.

1. `.enums` gibt eine Map von jedem Konstantennamen zu seinem Wert zurück. `.elems` zählt die Einträge — es gibt vier Münzen.

1. `.values` extrahiert nur die Zahlen hinter den Namen, und `.sum` addiert sie: `1 + 5 + 10 + 25` ergibt `41`.

{% include nav.html %}
