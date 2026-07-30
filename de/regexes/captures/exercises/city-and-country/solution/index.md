---
title: 'Lösung: Stadt und Land'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
if 'London-UK' ~~ / $<city>=(\w+) '-' $<country>=(\w+) / {
    say ~$<city>;
    say ~$<country>;
}
```

🦋 Du findest den Quellcode in der Datei [city-and-country.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/city-and-country.raku).

## Ausgabe

```
London
UK
```

## Kommentare

1. `$<city>=( … )` und `$<country>=( … )` geben den beiden Captures Namen statt Nummern.

1. Nach dem Treffer liest man sie als `$<city>` und `$<country>` zurück, was klarer liest, als `$0` und `$1` es täten.

1. Das Präfix `~` setzt jedes Capture in einen Zeichenketten-Zusammenhang, sodass es als blanker Text ausgegeben wird; ohne es würde `say $<city>` das Match-Objekt als `｢London｣` zeigen.

{% include nav.html %}
