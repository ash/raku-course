---
title: 'Lösung: Reihen Sie ein Promise an'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $p = start { 'raku' };
my $q = $p.then({ .result.uc });
my $r = $q.then({ .result ~ '!' });
say await $r;
```

🦋 Du findest den Quellcode in der Datei [promise-result.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/promise-result.raku).

## Ausgabe

```
RAKU!
```

## Kommentare

1. Jedes `.then` baut ein neues Promise, das läuft, sobald das vorige fertig ist. In seinem Block ist `.result` der Wert, den das vorige Promise erzeugt hat.

1. Der erste Nachfolger schreibt `'raku'` zu `'RAKU'` groß; der zweite fügt `'!'` an. Das letzte Promise, `$r`, abzuwarten durchläuft die ganze Kette und ergibt `'RAKU!'` — eine kleine Pipeline, in der jeder Schritt das Ergebnis des vorigen umformt.

{% include nav.html %}
