---
title: 'Lösung: Digitale Treppe'
---

{% include menu.html %}

Das Programm verwendet zwei Schleifen und zwei Bereiche.

## Code

Hier ist eine der möglichen Lösungen:

```raku
my $size = prompt 'Geben Sie die Größe ein: ';

for 1..$size -> $n {
    .print for 1..$n;
    print "\n";
}
```

🦋 Finden Sie das Programm in der Datei [digital-stairs.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/digital-stairs.raku).

## Ausgabe

Führen Sie das Programm aus und geben Sie die Größe der Struktur ein:

```console
$ raku exercises/loops/digital-stairs.raku
Geben Sie die Größe ein: 7
1
12
123
1234
12345
123456
1234567
```

## Kommentar

Beachten Sie, wie die aktuelle Ziffer gedruckt wird:

```raku
.print for 1..$n;
```

Wie bei `say` kann die Routine `print` als Methode aufgerufen werden. In diesem Fall wird sie auf der [Themenvariablen](/de/essentials/loops/topic) `$_` aufgerufen.

{% include nav.html %}