---
title: 'Lösung: Ein benanntes Token'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my regex word { \w+ }

if 'hello world' ~~ / <word> / {
    say $<word>;
}
```

🦋 Du findest den Quellcode in der Datei [named-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/named-token.raku).

## Ausgabe

```
｢hello｣
```

## Kommentare

1. `my regex word { \w+ }` gibt dem Muster einen Namen, damit es wiederverwendet werden kann.

1. `<word>` im Muster zu schreiben trifft es und capturt das Ergebnis unter demselben Namen, erreichbar als `$<word>`. Die erste Folge von Wortzeichen ist `hello`.

{% include nav.html %}
