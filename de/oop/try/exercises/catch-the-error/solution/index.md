---
title: 'Lösung: Fangen Sie den Fehler'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $ok = try { 6 * 7 };
say $ok;

my $bad = try { die 'broken' };
say $bad.defined;
say $!.message;
```

🦋 Du findest den Quellcode in der Datei [catch-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/catch-the-error.raku).

## Ausgabe

```
42
False
broken
```

## Kommentare

1. Läuft der Block ohne Fehler, ergibt `try` schlicht den Wert des Blocks, `$ok` enthält also `42`.

1. Das `die` im zweiten Block wirft eine Ausnahme, dieser Block ergibt also einen undefinierten Wert, und `$bad.defined` ist `False`.

1. Die gefangene Ausnahme liegt in der besonderen Variablen `$!`, und `$!.message` liefert den ihr übergebenen Text, `broken`.

{% include nav.html %}
