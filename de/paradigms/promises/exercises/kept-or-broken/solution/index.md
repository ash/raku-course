---
title: 'Lösung: Erfüllt oder gebrochen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $p = start { 10 };
await $p;
say $p.status;
```

🦋 Du findest den Quellcode in der Datei [kept-or-broken.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/kept-or-broken.raku).

## Ausgabe

```
Kept
```

## Kommentare

1. Nachdem der Block erfolgreich geendet hat, ist das Promise _erfüllt_.

1. `.status` meldet das als `Kept`. Hätte der Block eine Ausnahme geworfen, wäre der Status stattdessen `Broken`.

{% include nav.html %}
