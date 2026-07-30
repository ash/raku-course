---
title: 'Lösung: Warten Sie viele ab'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @words = <apple pear plum>;
my @jobs = @words.map(-> $w { start { $w.uc } });
say await @jobs;
```

🦋 Du findest den Quellcode in der Datei [await-many.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/await-many.raku).

## Ausgabe

```
(APPLE PEAR PLUM)
```

## Kommentare

1. `@words.map(-> $w { start { $w.uc } })` macht aus jedem Wort ein eigenes Promise, alle drei werden also nebenläufig großgeschrieben. Der Pointy Block benennt das Wort `$w`, sodass jedes Promise das richtige einfängt.

1. `await @jobs` wartet auf die ganze Liste und reicht die Ergebnisse in ihrer ursprünglichen Reihenfolge zurück, was `(APPLE PEAR PLUM)` ergibt.

{% include nav.html %}
