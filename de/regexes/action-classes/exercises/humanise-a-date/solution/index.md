---
title: 'Lösung: Machen Sie ein Datum lesbar'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
grammar Date {
    token TOP   { <year> '-' <month> '-' <day> }
    token year  { \d ** 4 }
    token month { \d ** 2 }
    token day   { \d ** 2 }
}

class Humanise {
    method year($/)  { make $/.Int }
    method month($/) { make <January February March April May June
                             July August September October November December>[$/ - 1] }
    method day($/)   { make $/.Int }
    method TOP($/)   { make "{$<day>.made} {$<month>.made} {$<year>.made}" }
}

say Date.parse('2026-07-05', actions => Humanise.new).made;
```

🦋 Du findest den Quellcode in der Datei [humanise-a-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/humanise-a-date.raku).

## Ausgabe

```
5 July 2026
```

## Kommentare

1. Anders als bei einer schlichten Rechenaktion machen die Tokenmethoden Werte **verschiedener Art**: `year` und `day` machen ganze Zahlen, `month` aber eine *Zeichenkette*, indem es seinen Zahlenwert als Index in eine Liste von Monatsnamen verwendet. `$/ - 1` macht aus dem zweistelligen Treffer eine Zahl (`07` → `7`) und verschiebt auf einen ab null gezählten Index, `month` `07` macht also `July`.

1. Die Methode `TOP` sieht sich den blanken Text nie wieder an. Sie liest nur die drei Werte, die die Untermethoden bereits gemacht haben — `$<day>.made`, `$<month>.made`, `$<year>.made` —, und setzt sie in die endgültige Zeichenkette ein. `5` aus `day` zurückzulesen lässt nebenbei auch die führende Null wegfallen.

1. Das ist die alltägliche Aufgabe einer Aktionsklasse: strukturierte Eingabe einmal zerlegen und dann jede Methode ihr eigenes Stück in das verwandeln lassen, was der Rest des Programms braucht.

{% include nav.html %}
