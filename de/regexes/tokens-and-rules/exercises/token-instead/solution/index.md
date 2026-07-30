---
title: 'Lösung: Regex gegen Token'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my regex r { \d+ '5' }
my token t { \d+ '5' }

say so '12345' ~~ / <r> /;
say so '12345' ~~ / <t> /;
```

🦋 Du findest den Quellcode in der Datei [token-instead.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/token-instead.raku).

## Ausgabe

```
True
False
```

## Kommentare

1. Im `regex` greift sich `\d+` zuerst das ganze `12345` und **weicht** dann **zurück** — es gibt die letzte `5` her, damit die wörtliche `5` treffen kann. Der Regex gelingt also.

1. Das `token` weigert sich, etwas herzugeben: `\d+` behält das ganze `12345`, die wörtliche `5` findet nichts mehr vor, und das Token scheitert. Genau dieses Verhalten ohne Zurückweichen macht `token` zur richtigen Standardwahl innerhalb von Grammatiken.

{% include nav.html %}
