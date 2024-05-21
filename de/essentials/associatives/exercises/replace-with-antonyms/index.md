---
title: 'Übung: Ersetzen mit Antonymen'
---

{% include menu.html %}

## Problem

Erstellen Sie ein Programm, das alle Wörter aus der Befehlszeile durch ihre Antonyme ersetzt. Wenn das Wort im Wörterbuch fehlt, ändern Sie es nicht und drucken es unverändert aus.

Verwenden Sie einen fest codierten Hash, um das Wörterbuch der Antonyme zu speichern. Hier ist eine vorbereitete Liste von etwa 200 Paaren, die Sie direkt in Ihr Programm kopieren und einfügen können: [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku). Alle Paare sind in beide Richtungen gespeichert, z.B.:

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    # . . .
    'below' => 'above',
    # . . .
    'present' => 'absent',
    # . . .
;
```

Machen Sie das Programm so einfach wie möglich und drucken Sie die Wörter zeilenweise aus.

## Beispiel

Führen Sie das Programm aus und übergeben Sie ihm ein paar Wörter. Stellen Sie sicher, dass mindestens einige der Wörter im Wörterbuch gefunden werden können.

```console
$ raku replace-with-antonyms.raku a quiet teacher wants to buy some salt
a
noisy
student
wants
to
sell
some
sugar
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}