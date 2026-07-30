---
title: 'Lösung: Anzahl der Befehlszeilenargumente'
---

{% include menu.html %}

Die Anzahl der Argumente kommt nach wie vor aus `@*ARGS.elems`, aber diesmal müssen wir etwas damit tun, statt sie nur auszugeben. Speichern Sie die Anzahl in einer Variablen und wählen Sie dann mit dem ternären Operator das passende Wort:

## Code

```raku
my $n = @*ARGS.elems;
my $word = $n == 1 ?? 'argument' !! 'arguments';
say "You passed $n $word.";
```

🦋 Finden Sie das Programm in der Datei [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/number-of-command-line-arguments.raku).

## Ausgabe

Es lohnt sich, die drei interessanten Fälle zu testen: kein Argument, genau eines und mehrere. Nur der zweite verwendet die Einzahlform.

```console
$ raku exercises/positionals/number-of-command-line-arguments.raku
You passed 0 arguments.

$ raku exercises/positionals/number-of-command-line-arguments.raku solo
You passed 1 argument.

$ raku exercises/positionals/number-of-command-line-arguments.raku one 2 three 4 five 6 seven
You passed 7 arguments.
```

{% include nav.html %}
