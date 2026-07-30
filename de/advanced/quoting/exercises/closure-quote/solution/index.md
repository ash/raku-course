---
title: 'Solution: Ein Closure in einem q-String'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $x = 10;
say q:c/$x squared is {$x ** 2}/;
```

🦋 Du findest den Quellcode in der Datei [closure-quote.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/closure-quote.raku).

## Ausgabe

```
$x squared is 100
```

## Kommentare

1. Das `:c` (Closure) Adverb schaltet die Interpolation von eingebettetem `{ … }`-Code in der ansonsten wörtlichen `q`-Form ein. Innerhalb der geschweiften Klammern ist `$x` echter Code, sodass `{$x ** 2}` zu `100` ausgewertet wird.

1. Das `$x` außerhalb der geschweiften Klammern bleibt genau so stehen, wie es geschrieben wurde, weil das Skalar-Adverb `:s` *nicht* aktiviert ist. Genau das ist der Sinn der funktionsspezifischen Adverbien: Du bekommst eingebetteten Code, ohne gleichzeitig die `$`-Interpolation einzuschalten.

1. Adverbien können gestapelt werden. Füge auch `:s` hinzu, und das führende `$x` wird ebenfalls interpoliert — beide Funktionen sind jetzt gleichzeitig aktiv:

```raku
my $x = 10;
say q:c:s/$x squared is {$x ** 2}/; # 10 squared is 100
```

{% include nav.html %}
