---
title: 'Lösung: Nummerieren Sie die Zeilen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
spurt 'words.txt', "apple\nbanana\ncherry\n";

my $n = 0;
for 'words.txt'.IO.lines -> $line {
    $n++;
    say "$n: $line";
}
```

🦋 Du findest den Quellcode in der Datei [shout-the-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/shout-the-lines.raku).

## Ausgabe

```
1: apple
2: banana
3: cherry
```

## Kommentare

1. `spurt` schreibt die drei Wörter, durch Zeilenumbrüche getrennt, in die Datei.

1. `.IO.lines` liefert die Zeilen eine nach der anderen, ohne ihre abschließenden Zeilenumbrüche. Wir führen einen Zähler `$n`, den wir bei jedem Durchgang erhöhen, sodass jede Zeile zusammen mit ihrer Position in der Datei ausgegeben wird.

{% include nav.html %}
