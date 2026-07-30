---
title: 'Solution: Ein beschreibbarer Parameter'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub double($n is rw) {
    $n *= 2;
}

my $score = 21;
double($score);
say $score;
```

🦋 Den Quellcode finden Sie in der Datei [writable-parameter.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/writable-parameter.raku).

## Ausgabe

```
42
```

## Kommentare

1. `is rw` bindet den Parameter `$n` an die Variable `$score` des Aufrufers, sodass `$n *= 2` innerhalb von `double` `$score` selbst ändert — deshalb wird `42` ausgegeben.

1. Ohne `is rw` wäre der Parameter schreibgeschützt und `$n *= 2` wäre ein Kompilierzeitfehler. Wenn man ihn stattdessen mit `is copy` markieren würde, hätte `double` eine private Kopie zum Ändern, und `$score` bliebe bei `21`.

{% include nav.html %}
