---
title: 'Solution: Befehlszeilenargumente drucken'
---

{% include menu.html %}

Das Programm erhält die Argumente von der Befehlszeile im Array `@*ARGS`. Daher müssen wir über seine Elemente iterieren.

## Code

```raku
.say for @*ARGS;
```

🦋 Finde das Programm in der Datei [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/print-command-line-arguments.raku).

## Ausgabe

Führen Sie das Programm aus und bestätigen Sie, dass es die Argumente Zeile für Zeile druckt:

```console
$ raku exercises/positionals/print-command-line-arguments.raku hello command-line arguments
hello
command-line
arguments
```

{% include nav.html %}