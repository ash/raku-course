---
title: Lösung von 'Untersuchung der Ausgabe von Prompt — Strings'
---

{% include menu.html %}

## Code

Hier ist das vollständige Programm, das die Aufgabe erledigt und sowohl den eingegebenen String als auch dessen Typ ausgibt.

```raku
my $name = prompt 'What is your name? ';
say $name;
say $name.WHAT;
```

🦋 Den Quellcode findest du in der Datei [prompt-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/prompt-strings.raku).

## Testläufe

Führe das Programm ein paar Mal aus und gib verschiedene Namen ein. Das Programm gibt die Eingabe wieder und meldet auch, dass die Variable einen String enthält, also ein Objekt des Typs `Str`.

```console
$ raku exercises/data-types/prompt-strings.raku
What is your name? Andrey
Andrey
(Str)
```

Führe das Programm nun erneut aus, gib ein paar Leerzeichen anstelle eines Namens ein und drücke die Eingabetaste.

```console
$ raku exercises/data-types/prompt-strings.raku
What is your name?    

(Str)
```

Wir sehen die Ausgabe nicht, aber wir sehen, dass der Typ der Variable immer noch `Str` ist.

{% include nav.html %}