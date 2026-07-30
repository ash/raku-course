---
title: 'Solution: Umkehren und laut rufen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say 'raku'.flip.uc;
```

🦋 Du findest den Quellcode in der Datei [reverse-and-shout.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/reverse-and-shout.raku).

## Ausgabe

```
UKAR
```

## Kommentare

1. Die Methoden werden von links nach rechts angewendet: `flip` kehrt zuerst `'raku'` in `'ukar'` um, und dann wandelt `uc` es in `'UKAR'` um.

1. Da jede Methode einen neuen String zurückgibt, kannst du sie in einem einzigen Ausdruck verketten.

{% include nav.html %}
