---
title: 'Solution: Zur Laufzeit laden'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

Das Programm, `require-import.raku`:

```raku
sub MAIN(Bool :$quiet) {
    if $quiet {
        say 'Silence.';
    }
    else {
        require Greeting <&hello>;
        say hello('Sam');
    }
}
```

🦋 Du findest die Quelldateien im Verzeichnis [exercises/advanced/modules-basics/require-at-runtime](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/require-at-runtime).

## Ausgabe

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Kommentare

1. `require` lädt das Modul zur Laufzeit statt zur Kompilierzeit. Allein importiert es nichts, weshalb ein einfaches `hello` unbekannt wäre.

1. Die Liste `<&hello>` weist `require` an, dieses eine Symbol zu importieren, sodass nach der Anweisung `hello('Sam')` direkt aufgerufen werden kann und `Hello, Sam!` ergibt.

1. Genau dafür ist `require` da: Da es zur Laufzeit ausgeführt wird, kann es innerhalb eines `if` stehen. Wenn `--quiet` angegeben wird, wird dieser Zweig übersprungen und das Modul nie geladen — etwas, das ein `use` zur Kompilierzeit nicht vermeiden könnte.

{% include nav.html %}
