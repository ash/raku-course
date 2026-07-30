---
title: 'Solution: Einen Skalar binden'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $source = 1;
my $bound := $source;
my $copy = $source;

$source = 9;
say $bound;
say $copy;
```

🦋 Du findest den Quellcode in der Datei [bind-a-scalar.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/bind-a-scalar.raku).

## Ausgabe

```
9
1
```

## Kommentare

1. Binding mit `:=` macht `$bound` zu einem anderen Namen für denselben Container wie `$source`, statt zu einer Kopie. Daher ist die Änderung von `$source` durch `$bound` sichtbar, das `9` ausgibt.

1. Gewöhnliche Zuweisung mit `=` kopiert den Wert in einen separaten Container, sodass `$copy` von der späteren Änderung nicht betroffen ist und weiterhin `1` ausgibt.

1. Beide nebeneinander zu sehen ist der ganze Sinn: `:=` teilt einen Container, `=` dupliziert den Wert.

{% include nav.html %}
