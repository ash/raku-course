---
title: 'Lösung: Verwenden Sie ein Token wieder'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my regex word { \w+ }

if 'cat dog' ~~ / <word> ' ' <word> / {
    say $<word>[0];
    say $<word>[1];
}
```

🦋 Du findest den Quellcode in der Datei [reuse-a-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/reuse-a-token.raku).

## Ausgabe

```
｢cat｣
｢dog｣
```

## Kommentare

1. Derselbe benannte Regex `word` wird im Muster zweimal aufgerufen.

1. Kommt ein benanntes Capture mehr als einmal vor, bilden die Ergebnisse eine Liste, sie werden also als `$<word>[0]` und `$<word>[1]` gelesen.

{% include nav.html %}
