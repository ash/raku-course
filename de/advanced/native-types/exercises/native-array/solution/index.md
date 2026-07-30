---
title: 'Solution: Ein natives Array'
---

{% include menu.html %}

Hier ist eine mögliche Lösung.

## Code

```raku
my uint8 @bytes = 100, 200, 255;
say @bytes.sum;
```

🦋 Du findest den Quellcode in der Datei [native-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/native-array.raku).

## Ausgabe

```
555
```

## Kommentare

1. Wenn der native Typ `uint8` mit fester Größe vor das `@`-Array gesetzt wird, wird ein Array deklariert, in dem jedes Element als einzelnes vorzeichenloses Byte gespeichert wird — das kompakte Layout, das sich für Binärdaten eignet.

1. Die Umlaufgrenze gilt für jedes *Element* (`0..255`), nicht für das Ergebnis der Summierung. `.sum` boxt die Summe in einen gewöhnlichen `Int`, sodass `100 + 200 + 255` die vollständige `555` ergibt.

{% include nav.html %}
