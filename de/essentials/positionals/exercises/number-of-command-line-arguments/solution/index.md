---
title: Lösung von „Die Anzahl der Befehlszeilenargumente“
---

{% include menu.html %}

Die Lösung ist ganz einfach.

## Code

```raku
say @*ARGS.elems;
```

Alternativ können Sie alle Methoden verketten:

```raku
@*ARGS.elems.say;
```

🦋 Finden Sie das Programm in der Datei [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/number-of-command-line-arguments.raku).

## Ausgabe

Dieses Programm erfordert einen Test von zwei Fällen:

1. Keine übergebenen Argumente.
1. Eine nicht-null Anzahl von übergebenen Argumenten.

```console
$ raku exercises/positionals/number-of-command-line-arguments.raku
0

$ raku exercises/positionals/number-of-command-line-arguments.raku one 2 three 4 five 6 seven
7
```

{% include nav.html %}