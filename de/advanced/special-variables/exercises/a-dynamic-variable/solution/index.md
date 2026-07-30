---
title: 'Solution: Eine dynamische Variable'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $*user = 'guest';

sub whoami {
    say "running as $*user";
}

whoami();

{
    my $*user = 'admin';
    whoami();
}
```

🦋 Du findest den Quellcode in der Datei [a-dynamic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/a-dynamic-variable.raku).

## Ausgabe

```
running as guest
running as admin
```

## Kommentare

1. Das `*`-Twigil macht `$*user` dynamisch. `whoami` nimmt es nie als Parameter entgegen — es findet den Wert, indem es nach außen durch den Aufrufstapel schaut. Der erste Aufruf meldet daher den Standardwert `guest`.

1. Der innere Block deklariert `$*user` als `admin` für die Dauer dieses Blocks neu. Dieselbe `whoami`-Funktion sieht jetzt `admin`, weil die dynamische Auflösung demjenigen folgt, der sich gerade auf dem Stapel befindet. Das Überschreiben einer dynamischen Variablen in einem Geltungsbereich ist die Art, wie du allem, was von dort aufgerufen wird, einen erweiterten Kontext gibst — ohne `whoami` selbst zu ändern.

{% include nav.html %}
