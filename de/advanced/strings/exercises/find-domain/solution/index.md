---
title: 'Solution: Der Domain-Teil'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $email = 'user@example.com';

my $at = $email.index('@');
say $email.substr($at + 1);
```

🦋 Du findest den Quellcode in der Datei [find-domain.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/find-domain.raku).

## Ausgabe

```
example.com
```

## Kommentare

1. `index('@')` gibt `4` zurück — die nullbasierte Position des `@`-Zeichens.

1. `substr($at + 1)` beginnt ein Zeichen nach dem `@` und läuft ohne Laengenangabe bis zum Ende des Strings, was `example.com` ergibt.

{% include nav.html %}
