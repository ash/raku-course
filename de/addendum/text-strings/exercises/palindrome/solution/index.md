---
title: 'Lösung: Palindromprüfung'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
for <level hello racecar> -> $word {
    say "$word: { $word eq $word.flip ?? 'yes' !! 'no' }";
}
```

🦋 Du findest den Quellcode in der Datei [palindrome.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/palindrome.raku).

## Ausgabe

```
level: yes
hello: no
racecar: yes
```

## Kommentare

1. `.flip` kehrt die Zeichen einer Zeichenkette um. Ein Wort ist genau dann ein Palindrom,
wenn es seiner eigenen Umkehrung gleicht, was der ternäre Operator in `yes` oder `no`
verwandelt.

{% include nav.html %}
