---
title: 'Lösung: Ersetzen mit Antonymen'
---

{% include menu.html %}

Um die Aufgabe zu lösen, wird der Inhalt der Datei [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku) in die Lösungsdatei [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/replace-with-antonyms.raku) kopiert. Danach wird eine Schleife über die Eingabeargumente ausgeführt, die versucht, das Wort im Wörterbuch zu finden, und wenn es gefunden wird, nimmt es das Antonym. Wenn es ein solches Wort im Wörterbuch nicht gibt, wird das ursprüngliche Wort verwendet.

## Code

Die Lösung wird unten dargestellt. Das Wörterbuch wird hier nur teilweise gezeigt.

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    'achieve' => 'fail',
    # . . .
    'wrong' => 'right',
    'young' => 'old'    
;

for @*ARGS -> $word {
    say %dictionary{$word} // $word;
}
```

🦋 Finde das Programm in der Datei [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/replace-with-antonyms.raku).

## Ausgabe

```console
$ raku exercises/associatives/replace-with-antonyms.raku early morning
late
evening

$ raku exercises/associatives/replace-with-antonyms.raku big soft drive
small
hard
drive
```

## Kommentare

1. Der `//` Operator ist der [defined-or Operator](/de/essentials/scalar-variables/defined-or-operator), der den ersten definierten Operanden zurückgibt.
1. Im Hash sind alle Schlüssel Wörter (d.h. sie sehen aus wie Bezeichner), daher müssen sie im Hash nicht in Anführungszeichen gesetzt werden. Es ist daher möglich, einen Hash wie unten gezeigt zu erstellen:

```raku
my %dictionary =
    above => 'below',
    absent => 'present',
    achieve => 'fail',
    # . . .
    wrong => 'right',
    young => 'old'    
;
```

{% include nav.html %}